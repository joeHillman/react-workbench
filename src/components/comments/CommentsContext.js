import React from "react";

const CommentsContext = React.createContext({});

export const CommentsProvider = CommentsContext.Provider;
export const CommentsConsumer = CommentsContext.Consumer;
