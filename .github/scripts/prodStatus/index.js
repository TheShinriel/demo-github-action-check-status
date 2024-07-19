const puppeteer = require("puppeteer")

describe("E2E Tests", () => {
  let browser
  let page

  beforeAll(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  })

  afterAll(async () => {
    await browser.close()
  })

  test("should load page without errors", async () => {
    let consoleErrors = []

    page.on("console", (message) => {
      const type = message.type()

      // To Debug, show all console message
      // console.log(`${type} ${message.text()}`)

      if (type === "error") {
        consoleErrors.push(`${type} ${message.text()}`)
        console.log(`To fix: ${type} ${message.text()}`)
      }
    })

    await page.goto(process.env.PAGE_URL || "http://localhost:3000", {
      waitUntil: "networkidle2",
    })
    expect(consoleErrors).toHaveLength(0)
  }, 30000)
})
