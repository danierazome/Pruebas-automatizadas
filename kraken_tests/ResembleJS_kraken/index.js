const playwright = require("playwright");
const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");

const fs = require("fs-extra");

const old_version_dir_path = "./scenario/old-version";
const new_version_dir_path = "./scenario/new-version";
const report_dir_path = "./report";

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest() {
  const numberOfImages = getScreenshotsAmount();

  // Report information
  let [reports, mismatchPercentageAverage] = await generateReportInformation(
    numberOfImages
  );

  // Create space new report
  createSpaceForNewReport(reports, mismatchPercentageAverage);

  return "Report generated successfully";
}

(async () => console.log(await executeTest()))();

// Generate Report information
async function generateReportInformation(numberOfImages) {
  let reports = [];
  let misMatchPercentageSum = 0;

  for (let i = 1; i < numberOfImages; i++) {
    let oldImagePath = `${old_version_dir_path}/${i}.png`;
    let newImagePath = `${new_version_dir_path}/${i}.png`;

    let data = await compareImages(
      fs.readFileSync(oldImagePath),
      fs.readFileSync(newImagePath),
      options
    );

    reports.push({
      isSameDimensions: data.isSameDimensions,
      misMatchPercentage: data.misMatchPercentage,
      oldImagePath: `./old-version/${i}.png`,
      newImagePath: `./new-version/${i}.png`,
      resultImage: data.getImageDataUrl(),
      index: i,
    });

    try {
      misMatchPercentageSum += Number(data.misMatchPercentage);
    } catch (e) {
      misMatchPercentageSum += 0;
    }
  }

  return [
    reports,
    getMismatchPercentageAverage(numberOfImages, misMatchPercentageSum),
  ];
}

function getMismatchPercentageAverage(numberOfImages, misMatchPercentageSum) {
  if (numberOfImages === 0) {
    return 0;
  } else {
    return misMatchPercentageSum / (numberOfImages - 1);
  }
}

// Check Screenshots to compare
function getScreenshotsAmount() {
  const oldScreenShots = fs.readdirSync(old_version_dir_path).length;
  const newScreenShots = fs.readdirSync(new_version_dir_path).length;

  if (oldScreenShots === 0 || newScreenShots === 0) {
    return 0;
  } else if (oldScreenShots >= newScreenShots) {
    return newScreenShots;
  } else {
    return oldScreenShots;
  }
}

// Create Folder for the new report

function createSpaceForNewReport(reports, mismatchPercentageAverage) {
  let reportDate = new Date()
    .toLocaleString()
    .replace(/\s|\./g, "")
    .replace(/\//g, "-")
    .replace(/:|,/g, ".");

  let newFolderPath = `./report/${reportDate}`;

  fs.mkdirSync(newFolderPath, { recursive: true });

  fs.copySync("./scenario", newFolderPath);

  fs.writeFileSync(
    `${newFolderPath}/report.html`,
    generateReport(reportDate, reports, mismatchPercentageAverage)
  );
  fs.copyFileSync("./report/util/style.css", `${newFolderPath}/style.css`);
}

// Generate Report
function generateReport(reportDate, reports, mismatchPercentageAverage) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Regresion Visual</title>
      <link href="style.css" type="text/css" rel="stylesheet" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <h3 class="mt-3">Report generated at ${reportDate}</h3>
      <h3 class="mt-3">Mismatch Average ${mismatchPercentageAverage}</h3>
      <div class="container text-center mt-2 mb-2">
        ${reports.map((report) => generateReportForStep(report))}
      </div>
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
}

//Generate report for one step
function generateReportForStep(report) {
  return `<div class="row mt-3">
  <h3 class="mb-2">Paso ${report["index"]}</h3>
  <div class="col">
    <h4 class="mb-2">Version Anterior</h4>
    <img
      src="${report["oldImagePath"]}"
      class="rounded image-report"
      alt="..."
    />
  </div>
  <div class="col">
    <h4 class="mb-2">Version Nueva</h4>
    <img
      src="${report["newImagePath"]}"
      class="rounded image-report"
      alt="..."
    />
  </div>
  <div class="col">
    <h4 class="mb-2 test">Diferencias</h4>
    <img
      src="${report["resultImage"]}"
      class="rounded image-report"
      alt="..."
    />
  </div>
  <h4 class="mt-2 mb-2">Mismath percentage: ${report["misMatchPercentage"]}</h3>
</div>`;
}
