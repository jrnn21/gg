import React, { Component } from "react";
import moment from "moment";
import UpdateV from "./update_v";
import DeleteV from "./delete_v";

class VideoList extends Component {
  state = {};
  render() {
    const { videoLists, UpdateVideo, DeleteVideo } = this.props;
    let i = 1;
    return (
      <>
        <h5 className="mt-1 text-center">Video Lists</h5>
        <table className="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Url</th>
              <th scope="col">Date</th>
              <th className="text-center" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {videoLists &&
              videoLists.map((video) => (
                <tr key={video.id}>
                  <th scope="row">{i++}</th>
                  <td>{video.title}</td>
                  <td>{video.url}</td>
                  <td>{moment(video.date.toDate()).calendar()}</td>
                  <td>
                    <UpdateV video={video} UpdateVideo={UpdateVideo} />
                    <DeleteV video={video} DeleteVideo={DeleteVideo} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default VideoList;
