/// ------------------------------- HANDY ARRAYS - @Types © HandyScript 11m/12d/23y -------------------------------

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