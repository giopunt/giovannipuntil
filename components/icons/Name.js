const Name = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={266}
        height={50}
        fill="none"
        {...props}
    >
        <path
            fill="#0006FF"
            d="M13.3 45.64c-2.16 0-4.2-.5-6.12-1.5s-3.48-2.4-4.68-4.2C1.3 38.1.7 35.92.7 33.4c0-2.12.52-4.38 1.56-6.78 1.08-2.44 2.46-4.9 4.14-7.38 1.72-2.52 3.58-4.9 5.58-7.14 2-2.28 3.96-4.3 5.88-6.06 1.92-1.8 3.62-3.22 5.1-4.26C24.44.74 25.48.22 26.08.22c.76 0 1.42.22 1.98.66.6.4.92 1.02.96 1.86 0 .4-.14.86-.42 1.38-.28.48-.82.98-1.62 1.5-.88.56-2 1.4-3.36 2.52-1.36 1.12-2.82 2.46-4.38 4.02-1.56 1.52-3.1 3.18-4.62 4.98a60.099 60.099 0 0 0-4.2 5.46c-1.28 1.84-2.3 3.64-3.06 5.4-.76 1.76-1.14 3.4-1.14 4.92 0 2.36.66 4.16 1.98 5.4 1.32 1.24 3.14 1.86 5.46 1.86 1.2 0 2.62-.34 4.26-1.02 1.64-.68 3.32-1.58 5.04-2.7 1.76-1.12 3.44-2.34 5.04-3.66 1.6-1.36 2.96-2.7 4.08-4.02 1.16-1.32 1.92-2.52 2.28-3.6-1 .24-2.26.5-3.78.78s-3.1.54-4.74.78c-1.6.24-3.06.44-4.38.6-1.32.16-2.28.24-2.88.24-1.24 0-2.22-.32-2.94-.96-.68-.64-1.02-1.28-1.02-1.92 0-.44.18-.86.54-1.26.36-.4.92-.66 1.68-.78.88-.12 2.04-.3 3.48-.54 1.48-.28 3.02-.54 4.62-.78 1.64-.28 3.14-.52 4.5-.72 1.4-.2 2.46-.3 3.18-.3 2.08 0 3.62.62 4.62 1.86 1 1.2 1.5 2.92 1.5 5.16 0 1.08-.54 2.4-1.62 3.96s-2.54 3.18-4.38 4.86c-1.8 1.64-3.82 3.18-6.06 4.62-2.2 1.44-4.46 2.62-6.78 3.54-2.32.88-4.52 1.32-6.6 1.32Zm34.62.66c-.76 0-1.44-.28-2.04-.84-.6-.6-.9-1.52-.9-2.76 0-.88.12-2.1.36-3.66.24-1.6.56-3.34.96-5.22.4-1.88.82-3.74 1.26-5.58.48-1.88.96-3.56 1.44-5.04s.9-2.58 1.26-3.3c.32-.56.62-.92.9-1.08.32-.16.62-.24.9-.24.56 0 1.04.18 1.44.54.44.36.66 1.06.66 2.1 0 .6-.12 1.6-.36 3-.2 1.36-.48 2.96-.84 4.8-.32 1.8-.68 3.66-1.08 5.58-.36 1.88-.72 3.68-1.08 5.4-.36 1.72-.64 3.16-.84 4.32-.16.64-.44 1.14-.84 1.5-.36.32-.76.48-1.2.48Zm5.88-33.18c-.92 0-1.8-.28-2.64-.84-.8-.56-1.2-1.46-1.2-2.7 0-1.04.24-1.88.72-2.52.52-.64 1.12-1.1 1.8-1.38.72-.32 1.34-.48 1.86-.48s1.1.12 1.74.36c.68.2 1.26.6 1.74 1.2.48.56.72 1.4.72 2.52 0 .76-.26 1.44-.78 2.04-.52.56-1.16 1-1.92 1.32-.72.32-1.4.48-2.04.48ZM68.034 46.6c-2.36 0-4.22-.9-5.58-2.7-1.36-1.8-2.04-4.14-2.04-7.02 0-1.04.14-2.14.42-3.3.32-1.2.72-2.28 1.2-3.24-.28-.28-.5-.66-.66-1.14-.16-.52-.24-1.16-.24-1.92 0-2.36.4-4.52 1.2-6.48.8-1.96 1.86-3.66 3.18-5.1 1.32-1.48 2.78-2.62 4.38-3.42 1.64-.8 3.3-1.2 4.98-1.2 2.76 0 5 1 6.72 3 1.72 1.96 2.58 4.96 2.58 9 0 2.12-.32 4.28-.96 6.48-.6 2.2-1.44 4.32-2.52 6.36-1.04 2.04-2.26 3.86-3.66 5.46-1.36 1.6-2.82 2.88-4.38 3.84-1.52.92-3.06 1.38-4.62 1.38Zm-2.04-18.3c.24.32.36.74.36 1.26 0 .6-.12 1.2-.36 1.8-.2.6-.42 1.42-.66 2.46-.24 1.04-.36 2.52-.36 4.44 0 1.92.76 2.88 2.28 2.88 1.68 0 3.24-.66 4.68-1.98 1.44-1.36 2.72-3.1 3.84-5.22 1.12-2.12 1.98-4.38 2.58-6.78.64-2.44.96-4.74.96-6.9 0-1.4-.26-2.38-.78-2.94-.52-.6-1.46-.9-2.82-.9-1.4 0-2.86.48-4.38 1.44-1.48.92-2.72 2.18-3.72 3.78-1 1.6-1.5 3.4-1.5 5.4 0 .44-.04.86-.12 1.26Zm29.095 16.2c-.6 0-1.2-.44-1.8-1.32-.56-.88-.98-2.12-1.26-3.72-.28-1.68-.54-3.6-.78-5.76-.24-2.16-.44-4.28-.6-6.36-.16-2.08-.28-3.92-.36-5.52-.08-1.6-.12-2.68-.12-3.24 0-2.08.32-3.62.96-4.62.68-1.04 1.54-1.56 2.58-1.56.72 0 1.24.2 1.56.6.32.36.48 1.2.48 2.52 0 .88.02 2.02.06 3.42.04 1.4.1 2.92.18 4.56.08 1.96.16 4.04.24 6.24.08 2.16.14 4.3.18 6.42.96-1.6 2.06-3.38 3.3-5.34 1.28-1.96 2.58-3.96 3.9-6 1.32-2.08 2.6-4.06 3.84-5.94 1.24-1.88 2.34-3.52 3.3-4.92s1.7-2.42 2.22-3.06c.68-.8 1.3-1.36 1.86-1.68.6-.32 1.12-.48 1.56-.48.6 0 1.08.22 1.44.66.4.44.6 1.06.6 1.86 0 .48-.1 1.02-.3 1.62-.16.56-.46 1.14-.9 1.74-1.08 1.64-2.38 3.56-3.9 5.76-1.52 2.2-3.1 4.48-4.74 6.84-1.64 2.36-3.24 4.66-4.8 6.9-1.56 2.2-2.92 4.14-4.08 5.82-2.04 3.04-3.58 4.56-4.62 4.56Zm28.971.36c-1.52 0-2.78-.7-3.78-2.1-.96-1.44-1.44-3.3-1.44-5.58 0-2 .5-3.92 1.5-5.76 1-1.88 2.32-3.68 3.96-5.4a40.1 40.1 0 0 1 5.58-4.74c2.04-1.48 4.1-2.82 6.18-4.02 2.12-1.2 4.12-2.22 6-3.06 1.92-.84 3.56-1.48 4.92-1.92 1.36-.48 2.3-.72 2.82-.72.88 0 1.32.48 1.32 1.44 0 .84-.34 1.58-1.02 2.22-.64.64-1.42 1.18-2.34 1.62-1.68.84-3.6 1.84-5.76 3a93.074 93.074 0 0 0-6.48 3.78 57.2 57.2 0 0 0-6.06 4.38c-1.84 1.56-3.32 3.2-4.44 4.92-1.12 1.68-1.68 3.4-1.68 5.16 0 .52.1.92.3 1.2.24.28.64.42 1.2.42.72 0 1.64-.34 2.76-1.02 1.16-.72 2.42-1.66 3.78-2.82 1.4-1.2 2.78-2.52 4.14-3.96 1.4-1.44 2.7-2.9 3.9-4.38 1.2-1.52 2.18-2.94 2.94-4.26.44-.72.94-1.32 1.5-1.8.56-.52 1.16-.78 1.8-.78.88 0 1.32.52 1.32 1.56 0 .32-.12 1.14-.36 2.46-.2 1.32-.42 2.92-.66 4.8-.24 1.84-.36 3.78-.36 5.82 0 4.36 1.04 6.54 3.12 6.54 1.16 0 2.36-.44 3.6-1.32 1.28-.88 2.52-2 3.72-3.36 1.24-1.4 2.38-2.88 3.42-4.44 1.04-1.56 1.92-3.04 2.64-4.44.72-1.4 1.22-2.52 1.5-3.36.64-4.48 1.54-7.7 2.7-9.66 1.2-1.96 2.42-2.94 3.66-2.94.8 0 1.44.22 1.92.66.48.4.72 1.3.72 2.7 0 .96-.38 2.4-1.14 4.32-.76 1.92-1.78 4.02-3.06 6.3a40.52 40.52 0 0 0-.6 6.3c-.04 2.16.18 4.14.66 5.94 1.04-.52 2.08-1.46 3.12-2.82 1.04-1.4 2.1-3.02 3.18-4.86 1.08-1.84 2.14-3.74 3.18-5.7 1.08-1.96 2.14-3.76 3.18-5.4 1.08-1.68 2.12-3.04 3.12-4.08 1.04-1.04 2.06-1.56 3.06-1.56 1.28 0 2.34.4 3.18 1.2.84.76 1.48 2.12 1.92 4.08.44 1.92.66 4.64.66 8.16 0 1.88.18 3.64.54 5.28.4 1.64 1.02 2.96 1.86 3.96.88.96 2 1.44 3.36 1.44 2.04 0 3.86-.36 5.46-1.08 1.6-.76 2.98-1.6 4.14-2.52 1.2-.96 2.2-1.8 3-2.52.8-.76 1.42-1.14 1.86-1.14.92 0 1.38.48 1.38 1.44 0 .4-.3 1.04-.9 1.92-.56.84-1.36 1.8-2.4 2.88-1 1.04-2.16 2.06-3.48 3.06a20.31 20.31 0 0 1-4.14 2.4c-1.44.64-2.9.96-4.38.96-2.76 0-5.02-.54-6.78-1.62-1.72-1.08-3-2.86-3.84-5.34-.8-2.48-1.2-5.8-1.2-9.96 0-2.28-.08-3.94-.24-4.98-.16-1.08-.56-1.8-1.2-2.16-.48.84-1.12 2.04-1.92 3.6-.76 1.52-1.64 3.22-2.64 5.1-.96 1.88-2 3.78-3.12 5.7a69.445 69.445 0 0 1-3.42 5.22c-1.16 1.56-2.32 2.84-3.48 3.84-1.16.96-2.26 1.44-3.3 1.44-.68 0-1.38-.36-2.1-1.08-.72-.76-1.32-1.74-1.8-2.94-.48-1.24-.72-2.56-.72-3.96 0-.92.02-1.78.06-2.58a70.531 70.531 0 0 1-5.16 6.48c-1.8 1.96-3.6 3.54-5.4 4.74-1.8 1.2-3.48 1.8-5.04 1.8-1.24 0-2.4-.44-3.48-1.32-1.08-.92-1.96-2.46-2.64-4.62-.64-2.2-1-5.18-1.08-8.94-1.76 2.48-3.62 4.68-5.58 6.6s-3.9 3.44-5.82 4.56c-1.92 1.08-3.72 1.62-5.4 1.62Zm87.479-.24c-1.16 0-2.2-.66-3.12-1.98-.92-1.32-1.38-3.02-1.38-5.1 0-2.28.3-4.72.9-7.32.64-2.6 1.42-5.24 2.34-7.92.92-2.72 1.82-5.34 2.7-7.86.2-.52.48-.9.84-1.14.4-.28 1-.42 1.8-.42 1.44 0 2.16.7 2.16 2.1 0 .32-.16 1.04-.48 2.16-.32 1.12-.74 2.5-1.26 4.14-.48 1.64-.98 3.42-1.5 5.34-.52 1.88-.98 3.78-1.38 5.7-.4 1.92-.68 3.7-.84 5.34.64-.68 1.36-1.72 2.16-3.12.84-1.4 1.74-2.98 2.7-4.74.96-1.8 1.96-3.6 3-5.4 1.04-1.84 2.08-3.52 3.12-5.04 1.08-1.56 2.12-2.8 3.12-3.72 1.04-.96 2-1.44 2.88-1.44 1.28 0 2.36.4 3.24 1.2.92.76 1.62 2.12 2.1 4.08.52 1.92.78 4.64.78 8.16 0 1.88.18 3.64.54 5.28.4 1.64 1.02 2.96 1.86 3.96.88.96 2 1.44 3.36 1.44 2.04 0 3.86-.36 5.46-1.08 1.6-.76 2.98-1.6 4.14-2.52 1.2-.96 2.2-1.8 3-2.52.8-.76 1.42-1.14 1.86-1.14.92 0 1.38.48 1.38 1.44 0 .4-.3 1.04-.9 1.92-.56.84-1.36 1.8-2.4 2.88-1 1.04-2.16 2.06-3.48 3.06a20.31 20.31 0 0 1-4.14 2.4c-1.44.64-2.9.96-4.38.96-2.76 0-5.02-.54-6.78-1.62-1.72-1.08-3-2.86-3.84-5.34-.8-2.48-1.2-5.8-1.2-9.96 0-2.28-.14-3.94-.42-4.98-.24-1.08-.7-1.8-1.38-2.16-.48.84-1.1 2.04-1.86 3.6-.76 1.52-1.64 3.22-2.64 5.1-.96 1.88-1.98 3.78-3.06 5.7-1.04 1.88-2.1 3.62-3.18 5.22-1.08 1.6-2.12 2.9-3.12 3.9-1 .96-1.9 1.44-2.7 1.44Zm40.523 1.68c-.76 0-1.44-.28-2.04-.84-.6-.6-.9-1.52-.9-2.76 0-.88.12-2.1.36-3.66.24-1.6.56-3.34.96-5.22.4-1.88.82-3.74 1.26-5.58.48-1.88.96-3.56 1.44-5.04s.9-2.58 1.26-3.3c.32-.56.62-.92.9-1.08.32-.16.62-.24.9-.24.56 0 1.04.18 1.44.54.44.36.66 1.06.66 2.1 0 .6-.12 1.6-.36 3-.2 1.36-.48 2.96-.84 4.8-.32 1.8-.68 3.66-1.08 5.58-.36 1.88-.72 3.68-1.08 5.4-.36 1.72-.64 3.16-.84 4.32-.16.64-.44 1.14-.84 1.5-.36.32-.76.48-1.2.48Zm5.88-33.18c-.92 0-1.8-.28-2.64-.84-.8-.56-1.2-1.46-1.2-2.7 0-1.04.24-1.88.72-2.52.52-.64 1.12-1.1 1.8-1.38.72-.32 1.34-.48 1.86-.48s1.1.12 1.74.36c.68.2 1.26.6 1.74 1.2.48.56.72 1.4.72 2.52 0 .76-.26 1.44-.78 2.04-.52.56-1.16 1-1.92 1.32-.72.32-1.4.48-2.04.48Z"
        />
    </svg>
)

export default Name
