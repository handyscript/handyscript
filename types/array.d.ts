/// ------------------------------- HANDY ARRAYS - @Types © HandyScript 11m/12d/23y -------------------------------
// / <reference path="object.d.ts" />
// / <reference path="string.d.ts" />
// / <reference path="number.d.ts" />
// / <reference path="boolean.d.ts" />
// / <reference path="function.d.ts" />
// / <reference path="date.d.ts" />
// / <reference path="regexp.d.ts" />
// / <reference path="symbol.d.ts" />
// / <reference path="map.d.ts" />
// / <reference path="set.d.ts" />
// / <reference path="weakmap.d.ts" />

/**
 * `SortAlgorithm` is a type that represents the sorting algorithms.
 */
type BinarySortAlgorithms =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick"
  | "heap"
  | "radix" //it supports only numbers
  | "counting" //it supports only numbers
  | "bucket"
  | "shell";

/**
 * `SortOrder` is a type that represents the sorting order.
 */
type SortOrder = "asc" | "desc";

/**
 * `ComparableData` is a type that represents the comparable data.
 */
type ComparableData = number | string | boolean | Date;