import { Quattrocento, Quattrocento_Sans } from "next/font/google";

// Export fonts to use in className of other React elements
export const quattrocentoSerif = Quattrocento({ weight: "700", subsets: ["latin"] });
export const quattrocentoSans = Quattrocento_Sans({ weight: ["400", "700"], subsets: ["latin"] });