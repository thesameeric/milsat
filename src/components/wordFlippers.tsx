import { motion } from "motion/react";
import { LayoutTextFlip } from "./ui/layout-text-flip";

export default function WordFlipper() {
    const milsatInsights = [
        // Education Infrastructure - AMAC
        { insight: "65.29% of schools in AMAC do not offer extracurricular activities", tag: "AMAC" },
        { insight: "74% of schools in AMAC do not have functional libraries", tag: "AMAC" },
        { insight: "68.8% of schools in AMAC do not have a computer lab", tag: "AMAC" },
        { insight: "85.3% of schools in AMAC do not have health centers in their premises", tag: "AMAC" },
        { insight: "Only 26% of 171 schools mapped in Garki, Kabusa and Wuse have functional libraries", tag: "AMAC" },
        { insight: "Only 23.53% of orphanage homes have schools in their premises", tag: "AMAC" },

        // Energy Infrastructure - AMAC
        { insight: "Only 3.6% of Mosques in AMAC have solar power", tag: "AMAC" },
        { insight: "Only 1.43% of Churches in AMAC have solar power", tag: "AMAC" },

        // Fuel & Gas Infrastructure - AMAC
        { insight: "97% of filling stations in AMAC don't have clinics, pharmacies, or drug stores", tag: "AMAC" },
        { insight: "83% of filling stations in AMAC LGA were functional in 2023", tag: "AMAC" },
        { insight: "17% of filling stations were either non-functional, abandoned, or under construction", tag: "AMAC" },
        { insight: "29.6% of mini gas plants don't offer home delivery services", tag: "AMAC" },

        // Veterinary Services - FCT
        { insight: "57.7% of FCT respondents have never registered with a veterinary clinic", tag: "FCT" },
        { insight: "26.5% of FCT respondents are registered with a veterinary clinic", tag: "FCT" },
        { insight: "15.8% of FCT respondents are still in the processing stage for veterinary registration", tag: "FCT" },
        { insight: "Abaji LGA had the lowest share of veterinary services at 2.1%", tag: "FCT" },

        // Business Registration
        { insight: "56.0% of respondents are registered with CAC", tag: "General" },

        // FUTA Off-Campus Residential Distribution
        { insight: "52.4% of residential buildings were enumerated in South Gate area (FUTA Off-Campus)", tag: "FUTA" },
        { insight: "33.9% of residential buildings were enumerated in North Gate area (FUTA Off-Campus)", tag: "FUTA" },
        { insight: "10.5% of residential buildings were enumerated in West Gate area (FUTA Off-Campus)", tag: "FUTA" },

        // South Gate Specific - FUTA
        { insight: "106 buildings in South Gate identified as having parking spaces", tag: "South Gate" },
        { insight: "71.6% of residential buildings in South Gate use MTN as service provider", tag: "South Gate" },
        { insight: "11.2% of residential buildings in South Gate priced at ₦150,000 and above per annum", tag: "South Gate" },
        { insight: "52.5% (163 buildings) in South Gate used postpaid electricity services without meters", tag: "South Gate" },

        // Electricity Metering - North Gate
        { insight: "33.9% (87 buildings) in North Gate equipped with prepaid meters", tag: "North Gate" },

        // Security Status - South Gate
        { insight: "2.5% of South Gate buildings rated excellent security", tag: "South Gate" },
        { insight: "48.2% of South Gate buildings rated good security", tag: "South Gate" },
        { insight: "34.5% of South Gate buildings rated fair security", tag: "South Gate" },
        { insight: "1.1% of South Gate buildings rated poor security", tag: "South Gate" },
        { insight: "13.7% of South Gate buildings have unspecified security status", tag: "South Gate" },

        // Electricity Supply - North Gate
        { insight: "56.7% of North Gate buildings receive 4-8 hours electricity daily", tag: "North Gate" },
        { insight: "29.4% of North Gate buildings receive 0-4 hours electricity daily", tag: "North Gate" },
        { insight: "5.0% of North Gate buildings receive 8-12 hours electricity daily", tag: "North Gate" },
        { insight: "0.6% of North Gate buildings receive 16-20 hours electricity daily", tag: "North Gate" },
        { insight: "8.3% of North Gate buildings have unspecified electricity duration", tag: "North Gate" },

        // Grid Power - South Gate
        { insight: "73.7% of South Gate buildings receive 4-8 hours of NEPA supply", tag: "South Gate" },
        { insight: "14.7% of South Gate buildings receive 0-4 hours of NEPA supply", tag: "South Gate" },
        { insight: "2.5% of South Gate buildings receive 8-12 hours of NEPA supply", tag: "South Gate" },
        { insight: "9.0% of South Gate buildings have unspecified NEPA supply duration", tag: "South Gate" }
    ];
    return <>
        <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <LayoutTextFlip
                text=""
                words={milsatInsights}
            />
        </motion.div>
    </>
}