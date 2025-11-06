import React from "react";
import Todo from "./components/todo/todo";
import SearchWithSuggestions from "./components/SearchInput/SearchInput";
import InfiniteScrollList from "./components/paginated/InfiniteScrollList";
import ScrollPositionList from "./components/paginated/InfiniteScrollList2";
import CommentSystem from "./components/nestedcomment/nestedComment";
import ProductFilterApp from "./components/ProductFilter/ProductFilter";
import Dropdown from "./components/Dropdown";
import Modal from "./components/Modal";
import Accordion from "./components/Accordion";

const App = () => {
  return (
    <div>
      <Todo />
      <SearchWithSuggestions />
      <CommentSystem />
      <ProductFilterApp />
      <Dropdown />
      <Modal />
      <Accordion />
      <ScrollPositionList />
      <InfiniteScrollList />
    </div>
  );
};

export default App;
