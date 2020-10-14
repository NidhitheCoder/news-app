
//(avoid same item in multiple times and also increase quantity of that curresponding item).

export const addNewsTBookmark = (BookmarkCollection,article) => {
    const existingItem = BookmarkCollection.find(
        BookmarkCollection => BookmarkCollection.title === article.title
    );
  
    if (existingItem) {
        alert("Already bookmarked");
        return BookmarkCollection;
    }
    return [...BookmarkCollection, article];
  };
  