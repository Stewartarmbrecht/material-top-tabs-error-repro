import { ColorSchemeName, StyleSheet, useColorScheme as _useColorScheme } from 'react-native';
//import { selectThemeName } from '../features/settings/settingsSlice';
//import { ThemeName } from '../features/settings/types';
//import { useReduxSelector } from '../redux/index';

export interface Theme {
  Name: "light" | "dark",
  
  TextColor: string,
  TextColorFaded: string,
  TextColorSelected: string,
  TextColorCompleted: string,

  ColorHighlight: string,
  ColorDanger: string,

  TextSizeRegular: number,
  TextSizeLarge: number,
  TextSizeSmall: number,

  BorderColor: string,
  BorderRadius: number,
  BorderWidth: number,

  Tint: string,

  IconSize: number,

  AppMarginLeft: number,
  AppMarginRight: number,

  BackgroundColorPrimary: string,
  BackgroundColorSecondary: string,
  BackgroundColorTertiary: string,
  BackgroundColorSelected: string,
  BackgroundColorCompleted: string,
  
  RowHighlightBackgroundColor: string,

  FieldSpacer: number,

  // TabIconDefault: string,
  // TabIconSelected: string,
  // BarChartBarWidth: number,
  // BarChartBarHeight: number,
  // RemainingOKColor: string,
  // RemainingWarnColor: string,
  // RemainingSkippedColor: string,
  // CompletedSkippedColor: string,
  // ExceededColor: string,
  // SkippedColor: string,
  // SkippedBackground: string,
  // OkColor: string,
  // WarnColor: string,
  // WarnBackground: string,
  // AchievedColor: string,
}

const LightTheme: Theme = {
  Name: "light",
  
  TextColor: '#000',
  TextColorFaded: '#CCCCCC',
  TextColorSelected: "#FFF",
  TextColorCompleted: "#FFF",

  ColorHighlight: "#024B90",
  ColorDanger: "#740000",

  TextSizeRegular: 18,
  TextSizeLarge: 24,
  TextSizeSmall: 12,

  BorderColor: '#CCCCCC',
  BorderRadius: 4,
  BorderWidth: StyleSheet.hairlineWidth,

  Tint: '#024B90',

  IconSize: 30,

  AppMarginLeft: 24,
  AppMarginRight: 24,

  BackgroundColorPrimary: '#F2F2F2',
  BackgroundColorSecondary: '#FFFFFF',
  BackgroundColorTertiary: '#E6E6E6',
  BackgroundColorSelected: "#0364BD", //#77BDFD
  BackgroundColorCompleted: "#",

  RowHighlightBackgroundColor: "#f2f8ff",

  FieldSpacer: 8,

  // TabIconDefault: '#CCCCCC',
  // TabIconSelected: tintColorLight,

  // BarChartBarWidth: 10,
  // BarChartBarHeight: 60,

  // OkColor: "#000",
  // WarnColor: "#A58E1A",
  // WarnBackground: "#FFF",
  // //WarnBackground: "#F3E9B7",

  // AchievedColor: "#00A433",

  // ExceededColor: "#036DCD",

  // SkippedColor: "#53585F",
  // SkippedBackground: "#D9D9D9",
  // //SkippedBackground: "#FFF",

  // RemainingOKColor: "#99CBA6",
  // RemainingSkippedColor: "#EAEAEA",
  // RemainingWarnColor: "#F7F0CD",

  // CompletedSkippedColor: "#00882B",
  // CompletedColor: "#00A433",
  // CompletedBackground: "#FFF",
  // //CompletedBackground: "#A8D8B2",

}

/*
const DarkTheme: Theme = {
  Name: "dark",

  TextColor: '#fff',
  TextColorFaded: "#6FB8FD",
  TextColorSelected: "#FFFFFF",

  HighlightColor: "#6FB8FD",
  ColorDanger: "#FF6565",

  FontFamily: 'Sriracha_400Regular',

  TextSizeRegular: 18,
  TextSizeLarge: 24,
  TextSizeSmall: 12,

  BorderColor: '#323232',
  BorderRadius: 4,
  BorderWidth: StyleSheet.hairlineWidth,

  Tint: '#ffffff',

  IconSize: 30,

  AppMarginLeft: 24,
  AppMarginRight: 24,

  BackgroundColorPrimary: '#000000',
  BackgroundColorSecondary: '#121212',
  BackgroundColorTertiary: '#323232',
  BackgroundColorSelected: "#024B90",

  RowHighlightBackgroundColor: "#26405C",

  FieldSpacer: 8,

  // TabIconDefault: '#323232',
  // TabIconSelected: tintColorDark,

  // BarChartBarWidth: 8,
  // BarChartBarHeight: 40,

  // OkColor: "#FFFFFF",
  // WarnColor: "#F0E014",
  // WarnBackground: "#000",
  // //WarnBackground: "#F3E9B7",

  // AchievedColor: "#00882B",

  // ExceededColor: "#036DCD",

  // SkippedColor: "#53585F",
  // SkippedBackground: "#D9D9D9",
  // //SkippedBackground: "#FFF",

  // RemainingOKColor: "#2D5939",
  // RemainingSkippedColor: "#808080",
  // RemainingWarnColor: "#8D7917",

  // CompletedSkippedColor: "#00882B",
  // CompletedColor: "#00A433",
  // CompletedBackground: "#FFF",
  // //CompletedBackground: "#A8D8B2",

}
*/
export function useTheme(): Theme {
  // const themeName = useReduxSelector(selectThemeName);  
  // const systemTheme = useColorScheme();
  let theme: Theme = LightTheme;
  // if ((themeName == ThemeName.System && systemTheme == "dark") || themeName == ThemeName.Dark) {
  //   theme = DarkTheme;
  // } 
  return theme;
}
