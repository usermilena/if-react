import React from "react";

import "./LogoIcon.css"

const LogoIcon = () => {
  return (
    <svg viewBox="0 0 205 40" className="top__header--logo">
      <path d="M.84 11.024c-.206-.33-.397-.78-.574-1.35A6.033 6.033 0 0 1 0 7.874c0-1.17.25-2.01.752-2.52.532-.51 1.21-.765 2.036-.765h19.297c.207.33.398.78.575 1.35.177.57.266 1.17.266 1.8 0 1.17-.266 2.01-.797 2.52-.501.51-1.165.765-1.991.765h-4.913V31.81c-.325.09-.84.18-1.55.27-.678.09-1.356.135-2.035.135s-1.284-.06-1.815-.18c-.501-.09-.929-.27-1.283-.54-.354-.27-.62-.645-.797-1.125-.177-.48-.265-1.11-.265-1.89V11.024H.84ZM31.85 31.946c-.295.09-.768.18-1.417.27-.62.09-1.268.135-1.947.135-.65 0-1.24-.045-1.77-.135-.502-.09-.93-.27-1.284-.54a2.792 2.792 0 0 1-.84-1.08c-.178-.48-.266-1.095-.266-1.845V15.253c0-.69.118-1.275.354-1.755a4.35 4.35 0 0 1 1.106-1.35c.472-.39 1.048-.734 1.726-1.034a16.838 16.838 0 0 1 4.736-1.395c.856-.15 1.711-.225 2.567-.225 1.416 0 2.538.285 3.364.855.826.54 1.239 1.44 1.239 2.7 0 .42-.06.84-.177 1.26-.118.39-.266.75-.443 1.08a20.679 20.679 0 0 0-3.806.359c-.62.12-1.21.255-1.77.405a6.74 6.74 0 0 0-1.372.45v15.343ZM42.345 4.05c0-1.14.369-2.1 1.106-2.88.767-.78 1.77-1.17 3.01-1.17 1.24 0 2.228.39 2.965 1.17.767.78 1.151 1.74 1.151 2.88s-.384 2.1-1.15 2.88c-.738.779-1.727 1.169-2.966 1.169-1.24 0-2.242-.39-3.01-1.17-.737-.78-1.106-1.74-1.106-2.88Zm7.878 27.896c-.325.06-.812.135-1.46.225-.62.12-1.255.18-1.904.18s-1.239-.045-1.77-.135c-.502-.09-.93-.27-1.284-.54a2.79 2.79 0 0 1-.84-1.08c-.178-.48-.266-1.095-.266-1.845V10.44c.325-.06.797-.135 1.416-.225.65-.12 1.298-.18 1.948-.18.649 0 1.224.045 1.726.135.53.09.973.27 1.327.54.355.27.62.645.797 1.125.207.45.31 1.05.31 1.8v18.312ZM64.882 9.449c1.77 0 3.408.24 4.913.72 1.535.45 2.848 1.155 3.94 2.114 1.091.96 1.947 2.175 2.566 3.645.62 1.44.93 3.165.93 5.174 0 1.92-.266 3.6-.797 5.04s-1.283 2.654-2.257 3.644c-.974.96-2.154 1.68-3.54 2.16-1.358.48-2.878.72-4.56.72-1.268 0-2.448-.195-3.54-.585v7.47c-.295.089-.767.179-1.416.269-.65.12-1.314.18-1.992.18-.65 0-1.24-.045-1.77-.135-.502-.09-.93-.27-1.284-.54s-.62-.645-.797-1.125c-.177-.45-.265-1.05-.265-1.8V14.803c0-.81.162-1.47.487-1.98.354-.51.826-.975 1.416-1.394.915-.6 2.05-1.08 3.408-1.44 1.357-.36 2.877-.54 4.558-.54Zm.09 17.188c3.038 0 4.558-1.845 4.558-5.535 0-1.92-.384-3.344-1.151-4.274-.738-.93-1.815-1.395-3.23-1.395-.561 0-1.063.075-1.506.225a5.15 5.15 0 0 0-1.15.45v9.899c.354.18.737.33 1.15.45.413.12.856.18 1.328.18ZM105.466 31.811c-.325.09-.841.18-1.549.27-.679.09-1.357.135-2.036.135a8.28 8.28 0 0 1-1.815-.18 2.936 2.936 0 0 1-1.283-.54c-.354-.27-.62-.645-.797-1.125-.177-.48-.265-1.11-.265-1.89v-7.019h-8.498v10.349c-.325.09-.84.18-1.549.27-.679.09-1.357.135-2.036.135-.678 0-1.283-.06-1.815-.18-.501-.09-.929-.27-1.283-.54-.354-.27-.62-.645-.797-1.125-.177-.48-.265-1.11-.265-1.89V4.724c.324-.06.84-.135 1.549-.225.708-.12 1.387-.18 2.036-.18.678 0 1.269.06 1.77.18.531.09.974.27 1.328.54.354.27.62.645.796 1.125.178.48.266 1.11.266 1.89v7.2h8.498V4.723c.324-.06.84-.135 1.549-.225.708-.12 1.387-.18 2.036-.18.678 0 1.268.06 1.77.18.531.09.974.27 1.328.54.354.27.619.645.796 1.125.177.48.266 1.11.266 1.89v23.757ZM132.901 21.057c0 1.86-.28 3.525-.841 4.995-.561 1.44-1.357 2.654-2.39 3.644-1.003.99-2.213 1.74-3.629 2.25-1.417.51-2.995.765-4.736.765-1.741 0-3.319-.27-4.736-.81-1.416-.54-2.64-1.305-3.673-2.295-1.003-1.02-1.785-2.25-2.346-3.69-.56-1.44-.841-3.059-.841-4.859 0-1.77.281-3.374.841-4.814.561-1.44 1.343-2.655 2.346-3.645a10.468 10.468 0 0 1 3.673-2.34c1.417-.54 2.995-.81 4.736-.81 1.741 0 3.319.286 4.736.856 1.416.54 2.626 1.32 3.629 2.34 1.033.99 1.829 2.204 2.39 3.644.561 1.44.841 3.03.841 4.77Zm-15.491 0c0 1.83.34 3.24 1.018 4.23.708.96 1.682 1.44 2.921 1.44 1.24 0 2.184-.495 2.833-1.485.679-.99 1.018-2.385 1.018-4.185 0-1.8-.339-3.18-1.018-4.14-.679-.989-1.638-1.484-2.877-1.484-1.239 0-2.198.495-2.877 1.485-.678.96-1.018 2.34-1.018 4.14ZM136.572 10.439c.295-.09.752-.18 1.372-.27.649-.09 1.313-.135 1.991-.135.649 0 1.225.045 1.726.135.531.09.974.27 1.328.54.354.27.62.645.797 1.125.206.45.31 1.05.31 1.8v9.673c0 1.23.295 2.115.885 2.655.59.51 1.445.765 2.567.765.678 0 1.224-.06 1.637-.18.443-.12.782-.24 1.018-.36V10.439c.295-.09.753-.18 1.372-.27.649-.09 1.313-.135 1.992-.135.649 0 1.224.045 1.726.135.531.09.974.27 1.328.54.354.27.619.645.796 1.125.207.45.31 1.05.31 1.8v13.678c0 1.5-.619 2.624-1.859 3.374-1.032.66-2.272 1.155-3.717 1.485-1.417.36-2.966.54-4.648.54-1.593 0-3.068-.18-4.425-.54-1.328-.36-2.479-.915-3.453-1.665-.973-.75-1.726-1.71-2.257-2.88-.531-1.2-.796-2.64-.796-4.319V10.44ZM180.478 25.467c0 2.28-.841 4.064-2.523 5.354-1.682 1.29-4.161 1.935-7.436 1.935-1.239 0-2.39-.09-3.452-.27-1.062-.18-1.977-.45-2.744-.81-.737-.39-1.328-.87-1.77-1.44-.413-.57-.62-1.245-.62-2.024 0-.72.148-1.32.443-1.8.295-.51.649-.93 1.062-1.26.856.48 1.829.915 2.921 1.305 1.121.36 2.405.54 3.851.54.914 0 1.608-.135 2.08-.405.501-.27.752-.63.752-1.08 0-.42-.177-.75-.531-.99-.354-.24-.944-.435-1.77-.585l-1.328-.27c-2.567-.51-4.485-1.305-5.754-2.385-1.239-1.11-1.859-2.684-1.859-4.724 0-1.11.236-2.115.709-3.015a6.286 6.286 0 0 1 1.991-2.25c.856-.6 1.874-1.064 3.054-1.394 1.21-.33 2.538-.495 3.983-.495 1.092 0 2.11.09 3.054.27.974.15 1.815.39 2.523.72.708.33 1.269.765 1.682 1.304.413.51.619 1.125.619 1.845 0 .69-.132 1.29-.398 1.8-.236.48-.546.885-.929 1.215-.236-.15-.591-.3-1.063-.45-.472-.18-.988-.33-1.549-.45-.56-.15-1.136-.27-1.726-.36a9.82 9.82 0 0 0-1.549-.135c-.974 0-1.726.12-2.257.36-.531.21-.797.555-.797 1.035 0 .33.148.6.443.81.295.21.856.405 1.682.585l1.372.315c2.832.66 4.839 1.575 6.019 2.744 1.21 1.14 1.815 2.625 1.815 4.455ZM195.706 32.71c-1.741 0-3.364-.24-4.869-.719a11.498 11.498 0 0 1-3.895-2.25c-1.091-.99-1.962-2.234-2.611-3.734-.619-1.5-.929-3.255-.929-5.265 0-1.98.31-3.674.929-5.084.649-1.44 1.49-2.61 2.523-3.51a9.525 9.525 0 0 1 3.541-2.024 12.601 12.601 0 0 1 4.071-.675c1.564 0 2.981.24 4.249.72 1.299.48 2.405 1.14 3.32 1.98a8.426 8.426 0 0 1 2.168 3.014c.531 1.17.797 2.445.797 3.825 0 1.02-.28 1.8-.841 2.34-.561.54-1.342.884-2.346 1.034l-10.932 1.665c.325.99.989 1.74 1.992 2.25 1.003.48 2.154.72 3.452.72 1.21 0 2.346-.15 3.408-.45 1.092-.33 1.977-.705 2.656-1.125.472.3.87.72 1.195 1.26.324.54.487 1.11.487 1.71 0 1.35-.62 2.354-1.859 3.014-.944.51-2.007.855-3.187 1.035-1.18.18-2.287.27-3.319.27Zm-1.24-17.682c-.708 0-1.327.12-1.858.36-.502.24-.915.555-1.24.945-.324.36-.575.78-.752 1.26-.148.45-.236.915-.266 1.395l7.569-1.26c-.089-.6-.413-1.2-.974-1.8-.561-.6-1.387-.9-2.479-.9Z"/>
    </svg>)
};

export default LogoIcon;
