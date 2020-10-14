
//(avoid same item in multiple times and also increase quantity of that curresponding item).

export const addNewsTBookmark = (BookmarkCollection,article) => {
    const existingItem = BookmarkCollection.find(
        BookmarkCollection => BookmarkCollection.title === article.title
    );
  
    if (!existingItem) {
        return [...BookmarkCollection, article];
    }
  
    return BookmarkCollection;
  };
  