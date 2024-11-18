import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DetailText from "@/components/shared/DetailText";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NextSeo } from "next-seo";

export default function ThankYou() {
	console.log("Testing Commit 11111111111");
	
	return (
		<div>
		<NextSeo noindex={true} />
		</div>
	);
}

// Use serverSideTranslations in getStaticProps to load the translations for the ThankYou page
export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
};
