import axios from "axios";

export const api = axios.create({
  baseURL: "https://opentdb.com/api.php"
});

export const api_category = axios.create({
  baseURL: "https://opentdb.com/api_category.php"
});

// https://opentdb.com/api.php?amount=10&category=25&type=multiple
