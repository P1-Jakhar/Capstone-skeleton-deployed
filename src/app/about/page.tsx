import PlaceholderPage from "@/components/PlaceholderPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About Us"
      description="Learn more about our mission, team, and the story behind Capstone."
    />
  );
}
