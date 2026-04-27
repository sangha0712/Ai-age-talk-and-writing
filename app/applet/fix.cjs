const fs = require("fs");
let data = fs.readFileSync("/app/applet/src/App.tsx", "utf8");

// Find the corrupted chunk from line 83 to 123
let fixed = data.replace(/\n];\ufffd[\s\S]+?\n];/g, "\n];");

if (fixed === data) {
    // try different character or approach
    const targetStr = "];\ufffd";
    const p1 = data.indexOf(targetStr);
    if (p1 !== -1) {
        const p2 = data.indexOf("];", p1 + 2);
        if (p2 !== -1) {
            fixed = data.substring(0, p1 + 2) + "\n" + data.substring(p2 + 2);
        }
    }
}

// Fallback search manually for duplicate chapters
const cIdx = data.indexOf('title: "현재의 상황과 향후 방향성",');
if (cIdx !== -1) {
    const p1 = data.indexOf("];", cIdx);
    if (p1 !== -1) {
        const nextChapterIdx = data.indexOf('title: "제작 경험 누적과 성과",', p1);
        const highlightsIdx = data.indexOf('const highlights =', p1);
        
        let p2 = -1;
        if (nextChapterIdx !== -1 && nextChapterIdx < highlightsIdx) {
            // we have repeats between p1 and highlights
            p2 = data.lastIndexOf("];", highlightsIdx);
        } else if (highlightsIdx !== -1) {
            p2 = data.lastIndexOf("];", highlightsIdx);
        }
        
        if (p2 !== -1 && p2 > p1) {
            fixed = data.substring(0, p1 + 2) + "\n" + data.substring(p2 + 2);
        }
    }
}

fs.writeFileSync("/app/applet/src/App.tsx", fixed);
console.log("Done fixing.");
