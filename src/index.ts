import { showHUD, closeMainWindow } from "@raycast/api";
import { exec } from "child_process";

export default async function main() {
  try {
    // 要打开的Arc扩展页面URL
    const extensionURL = "chrome-extension://pkgccpejnmalmdinmhkkfafefagiiiad/json-format/index.html";

    // 打开Arc浏览器并加载扩展页面
    exec(`open -a "Arc" "${extensionURL}"`, (error) => {
      if (error) {
        console.error(`Error opening Arc: ${error.message}`);
        showHUD("Error opening Arc browser");
        return;
      }

      showHUD("Arc browser opened with extension");
    });

    await closeMainWindow(); // 关闭Raycast主窗口
  } catch (error) {
    console.error(`Error: ${error.message}`);
    await showHUD("Failed to open Arc extension");
  }
}