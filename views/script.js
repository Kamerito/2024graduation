// 曲のデータを定義
const songs = [
    { title: "ないものねだり,またね", artist: "コーギー", category: "orange" },
    { title: "奏,水流のロック,グッドな音楽を,オー!リバル", artist: "Cadence keynotes", category: "green" },
    { title: "言って。 晴る", artist: "嘘つき達", category: "green" },
    { title: "シルエット", artist: "Reach", category: "green" },
    { title: "ロストワンの号哭,夜咄ディセイブ", artist: "θ", category: "green" },
    { title: "かわE,Tank top of the world,あつまれ☆パーティーピーポー,ハッピーウェディング前ソング", artist: "たつしくる", category: "orange" },
    { title: "ちゅ、多様性,瞬間センチメンタル", artist: "Fumpy", category: "green" },
    { title: "かくれんぼ,impulse", artist: "MAD BATTERS", category: "green" },
    { title: "トウキョウシャンディランデヴ", artist: "シャッフルA", category: "orange" },
    { title: "HE IS MINE,愛の標識,インフェルノ,Mela!", artist: "センサーシップ", category: "orange" },
    { title: "SPECIALZ", artist: "逆ら番", category: "green" },
    { title: "ロビンソン", artist: "キラキラ共和国", category: "green" },
    { title: "stardom", artist: "未定", category: "orange" },
    { title: "ホワイトノイズ", artist: "skept", category: "orange" },
    { title: "青春コンフリクト,DAYBREAK FRONTLINE", artist: "IMO", category: "orange" },
    { title: "秒針を噛む", artist: "未定", category: "orange" },
    { title: "Rapport", artist: "未定", category: "green" },
    { title: "青のすみか,The Beginning", artist: "coincidence", category: "orange" },
    { title: "新宝島", artist: "CtoC", category: "orange" },
    { title: "American ldiot, Dream on, the house of the rising sun", artist: "irene's", category: "orange" },
    { title: "人生のメリーゴーランド,Just the two of us", artist: "dat punk", category: "orange" },
    { title: "群青讃歌,アカシア", artist: "のこったーず", category: "red" },
    { title: "シンデレラボーイ,DENKOUSEKKA,女神", artist: "からあげどっぐ", category: "red" },
    { title: "バトンロード,栞", artist: "シークレッツ", category: "red" },
    { title: "レイメイ", artist: "シリウス", category: "red" },
    { title: "テレキャスタービーボーイ", artist: "照照様", category: "red" },
    { title: "God knows...,ギターと孤独と青い惑星", artist: "KOF団", category: "red" },
    { title: "お勉強しといてよ", artist: "はくちゅうむ", category: "red" },
    { title: "快晴", artist: "Gnu Brain", category: "red" },
    { title: "StaRt", artist: "いいえ", category: "red" },
    { title: "PAiNT it BLACK", artist: "鉄腕BiSH", category: "red" },
    { title: "ベノム,ヒバナ", artist: "非力ハムスター", category: "red" },
    { title: "未定", artist: "fracture", category: "red" },
    { title: "くらべられっ子", artist: "未定", category: "red" },
    { title: "絆の奇跡", artist: "未定", category: "red" },
    { title: "夕暮れ沿い、", artist: "未定", category: "red" },
    { title: "未定", artist: "未定", category: "red" },
    { title: "灼熱にて純情", artist: "未定", category: "red" },
    { title: "曖昧劣情lover", artist: "未定", category: "red" },
    { title: "Stand out fit in", artist: "未定", category: "red" },
    { title: "心做し,ただ声一つ", artist: "渦潮ぽてと+", category: "green" },
    { title: "HANABI", artist: "Bocci", category: "green" },
    { title: "未定", artist: "霞草", category: "green" },
    { title: "欲望に満ちた少年団", artist: "Who's ", category: "green" },
    { title: "灰色と青", artist: "Amber", category: "green" },
    { title: "春を待つ feat.倚水", artist: "無", category: "red" },
    { title: "未定", artist: "テトラポット", category: "red" },
    { title: "未定", artist: "未定", category: "red" },
    { title: "part of me", artist: "未定", category: "red" },
    { title: "なんか", artist: "未定", category: "red" },
];

// HTMLに曲のデータを反映する関数を定義
function renderTimetable() {
    const timetableContainer = document.getElementById('timetable-container');
    songs.forEach(song => {
        const cell = document.createElement('div');
        cell.className = `timetable-cell ${song.category}`;
        cell.innerHTML = `<p>${song.artist} / ${song.title}</p>`;
        timetableContainer.appendChild(cell);
    });
}

// ページが読み込まれたときに曲表を生成
window.onload = function() {
    renderTimetable();
};
