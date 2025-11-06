        document.addEventListener("DOMContentLoaded", () => {
        const fullScreenOverlay = document.getElementById("fullScreenOverlay");
        const scanStatus = document.getElementById("scanStatus");

        // カウントダウン用の変数を初期化 (テスト用に5秒に設定されています)
        let timeLeft = 60;

        // カウントアップの間隔 (ミリ秒) - 1000ms = 1秒ごとに更新
        const updateInterval = 1000;

        // 時間を "分:秒" 形式で表示するための関数
        function formatTime(totalSeconds) {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            // 常に2桁表示 (例: 5 -> 05)
            const formattedSeconds = String(seconds).padStart(2, "0");
            return `${minutes}:${formattedSeconds}`;
        }

        // 初期のステータス表示を更新 (恐怖を煽る日本語)
        scanStatus.textContent = `システム隔離まで残り時間： ${formatTime(
            timeLeft
        )}...データが消去されます。`;
        scanStatus.style.color = "#ff0000"; // カウントダウンなので最初から赤く

        // 2. 閉じようとすると警告を出す
        window.addEventListener("beforeunload", (e) => {
            e.preventDefault();
            e.returnValue = "";
        });

        // 3. カウントダウンの実行
        const timer = setInterval(() => {
            if (timeLeft > 0) {
            timeLeft -= 1;
            // カウントダウン中のメッセージ更新 (恐怖を煽る日本語)
            scanStatus.textContent = `ウイルス削除が可能な残り時間: ${formatTime(timeLeft)}`;

            // 危機感を高めるため、残り10秒を切ったら文字サイズを大きくする
            if (timeLeft <= 10) {
                scanStatus.style.fontSize = "1.2em";
                // 10秒を切ったら文章をより緊急感のあるものに変更
                scanStatus.textContent = `**【緊急】** 残り ${formatTime(
                timeLeft
                )}！操作を止めないでください！`;
            }
            } else {
            // 0秒に到達
            clearInterval(timer); // タイマーを停止

            // 絶望的な最終メッセージに変更
            scanStatus.textContent = "このPCは完全に感染しました。システムは復元不可能です。";
            scanStatus.style.fontSize = "1.5em";

            // 画面をブルースクリーン風に変更
            fullScreenOverlay.style.backgroundColor = "navy";
            fullScreenOverlay.style.color = "white";
            document.getElementById("alertBox").style.display = "none"; // 警告ボックスを非表示に

            // --- ランダムメッセージの処理 ---
                const finalMessages = [
                    {
                        title: "<h1>**ErrorCode001**</h1>",
                        body: "<p>Spring dawns. The mountain ridges gradually lighten, and purple clouds stretch thinly across the sky. Summer is night. Especially around the full moon. Even in the darkness, fireflies flit about in great numbers. And it is charming when just one or two faintly glow as they pass by. Even when rain falls, it is charming. Autumn is dusk. As the setting sun casts its light, the mountain's edge seems very near. Crows, heading to their roosts, fly in groups of three or four, two or three, their hurried flight itself moving. Moreover, the sight of geese flying in formation, appearing so small, is truly charming. After sunset, the sound of the wind, the chirping of insects—these are beyond description. Winter is dawn. Snow falling is beyond description. The frost, so white. Moreover, when it grows bitterly cold, hastily kindling a fire and passing around charcoal is most fitting. Come noon, when the air grows mild and lax, the fire in the brazier turns to white ash, which is unsightly. <br>Title: The Pillow Book</p>",
                    },
                    {
                        title: "<h1>**ErrorCode002**</h1>",
                        body: "<p>Long ago, there lived an old man known as the Bamboo Cutter.He roamed the fields and mountains gathering bamboo,using it for all manner of things.His name was said to be Sanuki no Tsukuri.Among his bamboo, there was one stalk that glowed brightly.Finding it strange, he drew near to look, and saw light shining within the hollow.Looking inside, he found a person about three inches tall,who was exceedingly beautiful<br>Title: The Tale of the Bamboo Cutter</p>",
                    },
                    {
                        title: "<h1>**ErrorCode003**</h1>",
                        body: "<p>As the snow fell thick and heavy, the Emperor, unusually, had the lattice raised and the curtains drawn high. Gathered together, they listened to tales. Then His Majesty said, “Minister of the Left, how thick is the snow upon Mount Kōro?” The others said, “We know that, and it has even been sung in poems, but we hadn't thought of it. Still, it must be something for the people of this palace.”<br>Title: The Pillow Book, 『Snow at Takarobō Peak』</p>",
                    },
                ];

            // ランダムにメッセージを選択
            const randomIndex = Math.floor(Math.random() * finalMessages.length);
            const randomMessage = finalMessages[randomIndex];

            // 新しい最終エラーメッセージを表示
            const finalMessageElement = document.createElement("div");
            finalMessageElement.innerHTML = randomMessage.title + randomMessage.body;
            finalMessageElement.style.textAlign = "center";
            finalMessageElement.style.padding = "50px";
            finalMessageElement.style.color = "white"; // ブルースクリーンなので白文字
            fullScreenOverlay.appendChild(finalMessageElement);
            // --- ランダムメッセージの処理ここまで ---
            }
        }, updateInterval);

        // 4. ボタンアクション
        document.getElementById("fixButton").addEventListener("click", () => {
            // ボタンを押しても何も解決しない (恐怖を煽る日本語)
            alert(
            "ウイルス除去システムのインストールサイトへ飛びます。"
            );

            // 元のコードの「ウイルス除去アプリのインストールページに飛びます。」という
            // 優しいジョークは、今回の恐怖演出に合わないため変更しました！
            });
        });
