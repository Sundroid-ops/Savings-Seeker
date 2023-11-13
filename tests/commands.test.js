const mongoConnect = require('../config/dbConfig');
const { registerUser, registerProduct, removeProduct, showProducts } = require('../middleware/commandLogic');
mongoConnect();

const chat_ID = 123;
const url = "https://www.amazon.in/Toysbuddy-Re-Writable-LCD-Writing-Tablet/dp/B0CBYSW4Y5/?_encoding=UTF8&pd_rd_w=o5eHf&content-id=amzn1.sym.211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_p=211684f4-ebe1-443f-8a4a-0773471e979f&pf_rd_r=KJNZV5XD84D3YZGZ7WF9&pd_rd_wg=lNpPr&pd_rd_r=7b668356-b868-4009-a35d-f1b399c5fcd8&ref_=pd_gw_crs_zg_bs_976392031";
const targetPrice = 10;

const userInput = [url, targetPrice];

test("Testing registration of new user", async()=>{
    await registerUser(chat_ID)
        .then((res)=>{
            expect(res).toBe('Registered Successfully🚀');
        })
})

test("Testing if user has already registered", async()=>{
    await registerUser(chat_ID)
        .then((res)=>{
            expect(res).toBe('Already Registered✅');
        })
})

test("Testing to return a message when no products have been registered", async()=>{
    await showProducts(chat_ID)
        .then((res=>{
            expect(res).toBe("No product registered yet");
        }))
})

test("Testing if user's target price is more than current product price", async()=>{
    const updateUserInput = [url, 1000]
    await registerProduct(chat_ID, updateUserInput)
        .then((res)=>{
            expect(res.split(' - ')[0]).toBe("Please enter the input price lower than the current price");
        })
})

test("Testing product registration", async()=>{
    await registerProduct(chat_ID, userInput)
        .then((res)=>{
            expect(res.split(' ')[0]).toBe("Registered");
        })
})

test("Testing if product is already registered", async()=>{
    await registerProduct(chat_ID, userInput)
        .then((res)=>{
            expect(res).toBe('This Product is already registered');
        })
})

test("Testing wrong links", async()=>{
    const updateUserInput = ['https://www.google.com/', targetPrice];
    await registerProduct(chat_ID, updateUserInput)
        .then((res)=>{
            expect(res).toBe('Sorry, We do not track from these website');
        })
})

test("Testing display of all tracking products", async()=>{
    await showProducts(chat_ID)
        .then((res=>{
            expect(res.split(':')[0]).toBe("Tracking Products ");
        }))
})

test("Testing removeable of product", async()=>{
    await removeProduct(chat_ID, url)
        .then((res)=>{
            expect(res).toBe('Removed and stopped tracking this product');
        })
})

test("Testing removable of unregistered products", async()=>{
    await removeProduct(chat_ID, url)
        .then((res)=>{
            expect(res).toBe("No such product was registered by you");
        })
})