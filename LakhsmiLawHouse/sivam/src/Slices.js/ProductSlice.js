import { createSlice } from "@reduxjs/toolkit";

import direct from "../assets/images/direct.jpg";
import bharathiyanagarik from "../assets/images/bharathiyanagarik.jpg";
import companiesact from "../assets/images/companiesact.jpg";
import labourcode from "../assets/images/labourcode.jpg";
import yearlytaxdigest from "../assets/images/yearlytaxdigest.jpg";
import capri from "../assets/images/capricorn.jpg";
import draftitrules from "../assets/images/draftitrules.jpg";
import foreign from "../assets/images/foreign.jpg";
import au from "../assets/images/auditcr.jpg";
import aa from "../assets/images/acc.jpg";
import seal from "../assets/images/seal.jpg";
import mbook from "../assets/images/minu.jpg";
import binder from "../assets/images/bind.jpg";
import reg from "../assets/images/reg.jpg";
import tds from "../assets/images/tds.webp";
import taxmann from "../assets/images/taxmann.webp";
import share from "../assets/images/share.jpg";
import aib from "../assets/images/AIB.jpg";
import sheet from "../assets/images/sheet.webp";
import emudhra from "../assets/images/emudhra.webp";
import sensys from "../assets/images/sensys.jpg";

const initialState = {

  /* SEARCH */
  searchTerm: "",

  /* PRODUCTS */
  Products: [

    {
      id: 1,
      Title: "Draft Income Tax Rules 2026",
      Price: 1595,
      Image: draftitrules,
      Category: "Professional Books",
      type: "book",
      Description:
        "Draft Income-tax Rules 2026..."
    },

    {
      id: 2,
      Title: "Labour codes 2026",
      Price: 595,
      Image: labourcode,
      Category: "Professional Books",
      type: "book",
      Description:
        "New Labour Codes..."
    },

    {
      id: 3,
      Title: "Bharatiya Nagarik Suraksha Sanhita 2023",
      Price: 2895,
      Image: bharathiyanagarik,
      Category: "Professional Books",
      type: "book",
      Description:
        "Bharatiya Nagarik Suraksha Sanhita..."
    },

    {
      id: 4,
      Title: "Direct Taxes Manual 2026",
      Price: 8725,
      Image: direct,
      Category: "Professional Books",
      type: "book",
      Description:
        "Direct Taxes Manual..."
    },

    {
      id: 5,
      Title: "Yearly Tax Digest 2026",
      Price: 4295,
      Image: yearlytaxdigest,
      Category: "Professional Books",
      type: "book",
      Description:
        "Yearly Tax Digest..."
    },

    {
      id: 6,
      Title: "Capricorn Dsc",
      Price: 2500,
      Image: capri,
      Category: "DigitalSignature",
      type: "software",
      Description:
        "For individuals, Companies..."
    },

    {
      id: 7,
      Title: "Customs & Foreign Trade Policy",
      Price: 2595,
      Image: foreign,
      Category: "Professional Books",
      type: "book",
      Description:
        "Customs & Foreign Trade..."
    },

    {
      id: 8,
      Title: "Taxmann Auditing & Assurance",
      Price: 995,
      Image: au,
      Category: "Academic Books",
      type: "book",
      Description:
        "CA Inter Auditing..."
    },

    {
      id: 9,
      Title: "Taxmann Advanced Accounting",
      Price: 945,
      Image: aa,
      Category: "Academic Books",
      type: "book",
      Description:
        "Advanced Accounting..."
    },

    {
      id: 10,
      Title: "Commonseal",
      Price: 2000,
      tax: "+Gst@18%",
      Image: seal,
      Category: "Commonseal",
      type: "software",
      Description:
        "The common seal..."
    },

    {
      id: 11,
      Title: "MinutesBook",
      Price: 750,
      tax: "+Gst@18%",
      Image: mbook,
      Category: "Minutes Book",
      type: "software",
      Description:
        "A minute book..."
    },

    {
      id: 12,
      Title: "MinutesBinder",
      Price: 750,
      tax: "+Gst@18%",
      Image: binder,
      Category: "Minutes Binder",
      type: "software",
      Description:
        "A minutes binder..."
    },

    {
      id: 13,
      Title: "Taxmann e-tds software 2026-27",
      Price: 8500,
      Image: taxmann,
      tax: "+Gst@18%",
      Category: "Etds software",
      type: "software",
      Description:
        "Taxmann ETDS software"
    },

    {
      id: 14,
      Title: "Tdsman e-tds software(Standard)",
      Price: 5400,
      tax: "+Gst@18%",
      Image: tds,
      Category: "Etds software",
      type: "software",
      Description:
        "Single User..."
    },

    {
      id: 15,
      Title: "Tdsman e-tds software(Professional)",
      Price: 9900,
      tax: "+Gst@18%",
      Image: tds,
      Category: "Etds software",
      type: "software",
      Description:
        "Professional version..."
    },

    {
      id: 16,
      Title: "Tdsman e-tds software(Enterprise lite)",
      Price: 20900,
      tax: "+Gst@18%",
      Image: tds,
      Category: "Etds software",
      type: "software",
      Description:
        "Enterprise version..."
    },

    {
      id: 17,
      Title: "Sensys XBRL software(Single User)",
      Price: 12000,
      tax: "+Gst@18%",
      Image: sensys,
      Category: "Xbrl software",
      type: "software",
      Description:
        "Single User XBRL..."
    },

    {
      id: 18,
      Title: "Sensys XBRL software(Multi User)",
      Price: 24000,
      tax: "+Gst@18%",
      Image: sensys,
      Category: "Xbrl software",
      type: "software",
      Description:
        "Multi User XBRL..."
    },

    {
      id: 19,
      Title: "ShareCertificate",
      Price: 16,
      Image: share,
      Category: "Share Certificate",
      type: "software",
      Description:
        "Share Certificate..."
    },

    {
      id: 20,
      Title: "Statutory register",
      Price: 1050,
      tax: "+Gst@18%",
      Image: reg,
      Category: "Statutory combined register",
      type: "software",
      Description:
        "Statutory register..."
    },

    {
      id: 21,
      Title: "Minutes Sheets (100No's)",
      Price: 500,
      Image: sheet,
      Category: "Minutes Sheet",
      type: "software",
      Description:
        "Minutes sheets..."
    },

    {
      id: 22,
      Title: "All India Bar Examination CRACKER",
      Price: 550,
      Image: aib,
      Category: "Bare Acts",
      type: "book",
      Description:
        "AIBE Cracker..."
    },

    {
      id: 23,
      Title: "Emudhra Dsc for 3years",
      Price: 3300,
      Image: emudhra,
      Category: "DigitalSignature",
      type: "software",
      Description:
        "Digital Signature..."
    }

  ]
};

export const ProductSlice = createSlice({

  name: "Product",

  initialState,

  reducers: {

    /* ADD PRODUCT */
    addProduct: (state, action) => {
      state.Products.push(action.payload);
    },

    /* SEARCH */
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }

  }

});

export const {
  addProduct,
  setSearchTerm
} = ProductSlice.actions;

export default ProductSlice.reducer;