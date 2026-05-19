import { createSlice } from "@reduxjs/toolkit";
import direct from "../assets/images/direct.jpg"
import bharathiyanagarik from "../assets/images/bharathiyanagarik.jpg"
import companiesact from "../assets/images/companiesact.jpg"
import labourcode from "../assets/images/labourcode.jpg"
import yearlytaxdigest from "../assets/images/yearlytaxdigest.jpg"
import capri from "../assets/images/capricorn.jpg"
import draftitrules from "../assets/images/draftitrules.jpg"
import foreign from "../assets/images/foreign.jpg"



const initialState={
    Products: [
    { id:1,
      Title: "Draft Income Tax Rules 2026",
      Price: 1595,
      Image: draftitrules,
      Category: "Professional Books",
      Description:"Draft Income-tax Rules 2026 is Taxmann's authoritative statutory compilation of the Draft Income-tax Rules and Draft Forms 2026, released by the CBDT ahead of the proposed enforcement of the Income-tax Act 2025 from 1st April 2026. This 63rd Edition is conceived as a transition and implementation reference, enabling stakeholders to understand and prepare for the comprehensive redesign of India's income-tax subordinate legislation. The publication goes beyond reproducing the draft text by integrating all 190 draft forms and by providing detailed, rule-wise and form-wise navigators that map the 2026 framework to the Income-tax Rules 1962. It serves as a single, coherent resource for analysing continuity, consolidation, procedural restructuring, and system readiness under the proposed regime."

    },

    { id:2,
      Title: "Labour codes 2026",
      Price: 595,
      Image: labourcode,
      Category: "Professional Books",
      Description:"New Labour Codes with a Comparative Study of New Labour Codes and Old Labour Laws is a comprehensive, transition-focused reference that presents the full text of all four Labour Codes, effective from 21st November 2025. Its standout feature is a 100+ page Comparative Study that systematically maps the New Codes to the 29 repealed labour Acts, explaining what has been merged, modernised, expanded, or omitted. This Edition provides unmatched clarity on legal reforms, compliance shifts, and policy rationale, making it both a statutory compendium and a practical roadmap for the new regime. Designed for legal professionals, HR/IR practitioners, government authorities, and academic users, it is an essential resource for navigating India's most significant labour-law overhaul."

    },
    {
      id:3,
      Title: "Bharatiya Nagarik Suraksha Sanhita 2023",
      Price: 2895,
      Image: bharathiyanagarik,
      Category: "Professional Books",
      Description:"Bharatiya Nagarik Suraksha Sanhita, 2023 – Law & Practice is a comprehensive and authoritative commentary on India's new law of criminal procedure, effective from 1st July 2024. It treats the BNSS not merely as a procedural code, but as the operational foundation of the restructured criminal law framework, offering clear guidance on the exercise, limits, and review of procedural powers. Designed as a courtroom-ready reference, the book provides sustained, section-by-section analysis that connects statutory text to practical application across the investigation, trial, and appellate stages. The 2026 Edition combines doctrinal clarity with comparative CrPC context, legislative intent, and extensive research tools, making it an indispensable resource for judges, practitioners, enforcement agencies, and advanced students of criminal law."


    },
    { 
      id:4,
      Title: "Direct Taxes Manual 2026",
      Price: 8725,
      Image: direct,
      Category: "Professional Books",
      Description:"Direct Taxes Manual is India's most authoritative statutory reference on direct taxation. Volume 1 presents the ITA 2025 (536 sections, 23 chapters, 15 Schedules) as amended by the Finance Act 2026, supported by six bi-directional cross-reference tables that map every section, rule, and form between the two regimes—the definitive transitional navigation tool for practitioners working across both Acts simultaneously. Volume 2 covers the complete procedural framework across 28 divisions of subordinate legislation, including the Income-tax Rules 2026, all five faceless proceedings schemes, ICDS, and the ITAT Rules, while Volume 3 consolidates over a century of Supreme Court and High Court precedent (1922–February 2026), six decades of CBDT administrative guidance (1961–February 2026), and a judicially defined words and phrases compilation—all re-indexed section-by-section against the 2025 Act"
      
    },

    {
      id:5,
      Title: "Yearly Tax Digest 2026",
      Price: 4295,
      Image: yearlytaxdigest,
      Category: "Etds software",
      Description: "Yearly Tax Digest & Referencer is Taxmann's definitive annual record of income-tax jurisprudence in India, systematically capturing how the law has been interpreted and applied by courts and tribunals. The 2026 Edition consolidates 3,550+ rulings reported during 2025 (updated till 16th November 2025) across the Supreme Court, High Courts, and ITAT. Presented as a two-volume, section-wise and issue-wise judicial digest, it enables precise identification, validation, and citation of precedents. This publication serves as an essential litigation and advisory reference for tax professionals, in-house teams, revenue authorities, and researchers dealing with complex, precedent-driven tax matters."
    },
    {
      id:6,
      Title: "Capricorn Dsc",
      Price: 2500,
      Image: capri,
      Category: "Digital Signature",
      Description:"For individuals, Companies, Dgft, Nri individuals"
    },
    
     {
      id:7,
      Title: "Customs & Foreign Trade Policy (FTP) Ready Reckoner",
      Price: 2595,
      Image: foreign,
      Category: "Professional Books",
      Description:"Customs & Foreign Trade Policy (FTP) Ready Reckoner, now in its 28th Edition, is the standard single-volume treatise on India's cross-border indirect tax regime—covering the Customs Act, Customs Tariff Act, FT(D&R) Act, SEZ Act, IFSCA Act, and FTP 2023 with the HBP in one integrated work, updated to the Finance Act 2026 with the Baggage Rules 2026, CBDPR 2026, and CBIC Customs Manual 2025. Structured across 61 chapters in two Divisions (Customs Law and FTP) with a concept-to-compliance-to-enforcement progression, its defining feature is a four-layer citation density—statute → subordinate legislation → administrative guidance → judicial authority—at every paragraph, making it fit for direct use in advisory work, written submissions, and examination preparation."
    }

   ]}
  export const ProductSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{
      addProduct:(state,action)=>{
        state.Products.push(action.payload)
    
    }}
})
export const {addProduct} = ProductSlice.actions