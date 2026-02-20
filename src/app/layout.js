


export const metadata = {
  title: {
    default: "Hybrid One Construction",
    template: "%s | Hybrid One Construction",
  },
  description: "Houston-based construction guidance and project management",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon.png" },
    ],
    apple: [
      { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon.png" },
    ],
    shortcut: [
      { rel: "shortcut icon", url: "/favicon.png" },
    ],
  },
};
import "~/public/main-assets/css/bootstrap.min.css";
import "~/public/main-assets/css/bootstrap.rtl.min.css";
import "~/public/main-assets/css/fontawesome.min.css";
import "~/public/main-assets/css/nice-select.min.css";
import "~/public/main-assets/css/remixicon.css";
import "~/public/main-assets/css/slick.min.css";
import "~/public/main-assets/css/style.css";
import "~/public/main-assets/css/react-adjustment.css";
import "~/public/main-assets/css/fonts.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/main-assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/main-assets/css/bootstrap.rtl.min.css" />
        <link rel="stylesheet" href="/main-assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/main-assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="/main-assets/css/remixicon.css" />
        <link rel="stylesheet" href="/main-assets/css/slick.min.css" />
        <link rel="stylesheet" href="/main-assets/css/style.css" />
        <link rel="stylesheet" href="/main-assets/css/react-adjustment.css" />
        <link rel="stylesheet" href="/main-assets/css/fonts.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
