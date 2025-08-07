// import * as React from "react";
// import { Tooltip } from "recharts";
// import type { TooltipProps } from "recharts/types/component/Tooltip";

// // Minimal classnames helper to replace external dependency
// function cn(...classes: (string | false | null | undefined)[]) {
//   return classes.filter(Boolean).join(" ");
// }

// // Define payload item type according to typical Recharts payload structure
// type PayloadItem = {
//   dataKey?: string | number;
//   name?: string;
//   value?: number;
//   color?: string;
//   payload?: Record<string, any>;
//   fill?: string;
//   [key: string]: any;
// };

// // Dummy hook: replace with your real hook or import
// const useChart = () => {
//   return { config: {} };
// };

// // Dummy function: replace with your real function or import
// function getPayloadConfigFromPayload(config: any, item: PayloadItem, key: string) {
//   return config?.[key] || { label: key, icon: undefined };
// }

// const ChartTooltipContent = React.forwardRef<
//   HTMLDivElement,
//   TooltipProps<number, string> & {
//     hideLabel?: boolean;
//     hideIndicator?: boolean;
//     indicator?: "line" | "dot" | "dashed";
//     nameKey?: string;
//     labelKey?: string;
//   }
// >((props, ref) => {
//   const {
//     active,
//     payload,
//     label,
//     className,
//     indicator = "dot",
//     hideLabel = false,
//     hideIndicator = false,
//     labelFormatter,
//     labelClassName,
//     formatter,
//     //color,
//     nameKey,
//     labelKey,
//   } = props;

//   const { config } = useChart();
  

//   // Cast payload and label to well-known types
//   const safePayload = payload as PayloadItem[] | undefined;
//   const safeLabel = label as string | number | undefined;

//   const tooltipLabel = React.useMemo(() => {
//     if (hideLabel || !safePayload?.length) return null;

//     const [item] = safePayload;
//     const key = `${labelKey || item.dataKey || item.name || "value"}`;
//     const itemConfig = getPayloadConfigFromPayload(config, item, key);
//     const value =
//       !labelKey && typeof safeLabel === "string"
//         ? config[safeLabel as keyof typeof config]?.label || safeLabel
//         : itemConfig?.label;

//     if (labelFormatter) {
//       return (
//         <div className={cn("font-medium", labelClassName)}>
//           {labelFormatter(value, safePayload)}
//         </div>
//       );
//     }

//     if (!value) return null;

//     return <div className={cn("font-medium", labelClassName)}>{value}</div>;
//   }, [
//     safeLabel,
//     labelFormatter,
//     safePayload,
//     hideLabel,
//     labelClassName,
//     config,
//     labelKey,
//   ]);

//   if (!active || !safePayload?.length) return null;

//   const nestLabel = safePayload.length === 1 && indicator !== "dot";

//   return (
//     <div
//       ref={ref}
//       className={cn(
//         "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
//         className
//       )}
//     >
//       {!nestLabel ? tooltipLabel : null}
//       <div className="grid gap-1.5">
//         {safePayload.map((item, index) => {
//           const key = `${nameKey || item.name || item.dataKey || "value"}`;
//           const itemConfig = getPayloadConfigFromPayload(config, item, key);
//           const indicatorColor = color || item.payload?.fill || item.color;

//           return (
//             <div
//               key={item.dataKey ?? index}
//               className={cn(
//                 "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
//                 indicator === "dot" && "items-center"
//               )}
//             >
//               {formatter && item?.value !== undefined && item.name ? (
//                 formatter(item.value, item.name, item, index, item.payload)
//               ) : (
//                 <>
//                   {itemConfig?.icon ? (
//                     <itemConfig.icon />
//                   ) : (
//                     !hideIndicator && (
//                       <div
//                         className={cn(
//                           "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
//                           // {
//                           //   "h-2.5 w-2.5": indicator === "dot",
//                           //   "w-1": indicator === "line",
//                           //   "w-0 border-[1.5px] border-dashed bg-transparent":
//                           //     indicator === "dashed",
//                           //   "my-0.5": nestLabel && indicator === "dashed",
//                           // }
//                         )}
//                         style={
//                           {
//                             "--color-bg": indicatorColor,
//                             "--color-border": indicatorColor,
//                           } as React.CSSProperties
//                         }
//                       />
//                     )
//                   )}
//                   <div
//                     className={cn(
//                       "flex flex-1 justify-between leading-none",
//                       nestLabel ? "items-end" : "items-center"
//                     )}
//                   >
//                     <div className="grid gap-1.5">
//                       {nestLabel ? tooltipLabel : null}
//                       <span className="text-muted-foreground">
//                         {itemConfig?.label || item.name}
//                       </span>
//                     </div>
//                     {item.value && (
//                       <span className="font-mono font-medium tabular-nums text-foreground">
//                         {item.value.toLocaleString()}
//                       </span>
//                     )}
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// });

// ChartTooltipContent.displayName = "ChartTooltip";

// export default ChartTooltipContent;
