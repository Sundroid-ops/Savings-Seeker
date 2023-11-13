const { scrapper } = require('../utils/scraper');

test('Testing the web-scrapper', async()=>{
    const url = 'https://www.amazon.in/Samsung-inches-Crystal-iSmart-UA43CUE60AKLXL/dp/B0C1GX5RVW/ref=sr_1_3?_encoding=UTF8&content-id=amzn1.sym.d980e9f6-d3ec-4916-9717-3b447a6dedc7&crid=3LFOOA0EHKFX3&keywords=TVs&pd_rd_r=83c03984-19b5-4c0c-aa5c-4a6a27435508&pd_rd_w=IelSd&pd_rd_wg=L3KAd&pf_rd_p=d980e9f6-d3ec-4916-9717-3b447a6dedc7&pf_rd_r=1X1650RBEAJP5E3AE355&qid=1697393405&refinements=p_n_size_browse-bin%3A11962149031&rnid=1485065031&s=electronics&sprefix=tvs%2Celectronics%2C273&sr=1-3&th=1';

    const htmlElements =  {
        found : true,
        name_element : "#productTitle",
        price_element : ".a-price-whole"
    }

    await scrapper(url, htmlElements)
        .then((res)=>{
            expect(res.status).toBe(true);
        })
})