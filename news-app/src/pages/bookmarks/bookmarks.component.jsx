import React from "react";
import "./bookmarks.styles.scss";
import {connect} from 'react-redux';
import CardContainer from '../../components/card-container/card-container.component';
import { getBookmarkCollections } from "../../redux/bookmark/bookmark.selectors";
import {createStructuredSelector} from 'reselect'

class bookmarks extends React.Component {
  render() {
    const {bookmark} = this.props;
    // console.log(this.props.bookmark)
    return bookmark.length ? (
      <div className="App">
        <CardContainer news={bookmark} caption="Remove from Bookmark" />
      </div>
    ) : (
      <span className="no-bookmark"> No Bookmarks</span>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  bookmark: getBookmarkCollections
});

export default connect(mapStateToProps)(bookmarks);
