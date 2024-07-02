// import { CssBaseline, GlobalStyles, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
// import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
// // import getDesignTokens from '../theme';
// import dark from '../theme/dark';

// const ColorModeContext = createContext(() => {});

// export { ColorModeContext };

// export default function ColorModeProvider({ children }: { children: React.ReactNode }) {
//   const [mode, setMode] = useState<PaletteMode>('light');

//   const toggleColorMode = useCallback(() => {
//     setMode((prevMode: PaletteMode) => (prevMode === 'dark' ? 'light' : 'dark'));
//   }, []);

//   // auth state changed
//   // useEffect(() => {
//   //   if (auth.state.isLoading) return;
//   //   if (auth.user!.theme) {
//   //     setMode(auth.user!.theme);
//   //   }
//   // }, [auth]);

//   // Update the theme only if the mode changes
//   const theme = dark;

//   // set colors to CSS :root
//   // const setGlobalStyles = () => (
//   //   <GlobalStyles
//   //     styles={{
//   //       ':root': {
//   //         '--color-primary': theme.palette.primary.main,
//   //         '--color-secondary': theme.palette.secondary.main,
//   //         '--text-color-primary': theme.palette.text.primary,
//   //         '--background-default': theme.palette.background.default,
//   //         '--border-color': (theme.palette as T).borderColor
//   //       }
//   //     }}
//   //   />
//   // );

//   return (
//     <ColorModeContext.Provider value={toggleColorMode}>
//     </ColorModeContext.Provider>
//   );
// }
