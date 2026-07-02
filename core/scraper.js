import axios from "axios";

/* ====== Sleep Function ====== */
const sleep = (ms) => new Promise((res, rej) => {
    setTimeout(res, ms);
});

/* ====== Get Random User Agents ====== */
function UserAgents()
{

    const userAgents = [
        // --- Chrome (Windows) ---
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        // --- Chrome (macOS & Linux) ---
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        // --- Safari (iPhone / iPad / Mac) ---
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPad; CPU OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Safari/605.1.15",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
        // --- Firefox ---
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:123.0) Gecko/20100101 Firefox/123.0",
        "Mozilla/5.0 (X11; Linux x86_64; rv:123.0) Gecko/20100101 Firefox/123.0",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/123.0 Mobile/15E148 Safari/605.1.15",
        // --- Edge ---
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0",
        // --- Android Devices ---
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/24.0 Chrome/117.0.0.0 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        
        ...Array.from({ length: 177 }, (_, i) => {
          const chromeVersions = [110, 112, 114, 115, 116, 117, 118, 119, 120, 121, 122];
          const firefoxVersions = [110, 113, 115, 118, 120, 122, 123];
          const iosVersions = ["15_5", "16_0", "16_4", "17_0", "17_1", "17_2", "17_3"];
          const androidVersions = [11, 12, 13, 14];
          
          const verC = chromeVersions[i % chromeVersions.length];
          const verF = firefoxVersions[i % firefoxVersions.length];
          const verI = iosVersions[i % iosVersions.length];
          const verA = androidVersions[i % androidVersions.length];
      
          const types = [
            `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${verC}.0.0.0 Safari/537.36`,
            `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${verC}.0.0.0 Safari/537.36`,
            `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:${verF}.0) Gecko/20100101 Firefox/${verF}.0`,
            `Mozilla/5.0 (iPhone; CPU iPhone OS ${verI} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${verI} Mobile/15E148 Safari/604.1`,
            `Mozilla/5.0 (Linux; Android ${verA}; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${verC}.0.0.0 Mobile Safari/537.36`
          ];
          return types[i % types.length];
        })
      ];
      
    let RandomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];

    return RandomUserAgent;
      

}

/* ====== Get data ====== */
async function Getdata(url) {

    try {

        let { data } = await axios.get(url, {
            headers: {
                "User-Agent": UserAgents()
            }
        });

        await sleep(2000);
        if (!data || data == "")
        {
            console.log("Not found data");
            return null;
        } else {
            return data;
        }
    } catch (e) {
            throw Error(e);
     }
    
}

export { Getdata };