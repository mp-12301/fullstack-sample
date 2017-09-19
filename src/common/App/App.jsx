import React, { Component } from "react";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Repository from "./components/Repository";

import cls from "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      repos: [],
    };
  }

  fetchReposFromUser = () => {
    if (this.state.user !== "") {
      axios.get(`/api/${this.state.user}/repos`).then((response) => {
        if (response.data && response.data.data) {
          let repos = response.data.data;
          repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
          repos = repos.slice(0, 10);
          this.setState({ repos });
        }
      });
    }
  }

  userChange = (event) => {
    this.setState({ user: event.target.value });
  }

  render() {
    const repos = this.state.repos.map((repo, index) =>
      (<Repository key={index}
        name={repo.name}
        url={repo.html_url}
        description={repo.description}
        language={repo.language}
        stars={repo.stargazers_count}
        forks={repo.forks_count}
      />));
    return (
      <div>
        <input type="text" onChange={this.userChange} className={`form-control input-lg ${cls["input-user"]}`} placeholder="Type a valid Github username..." />
        <button type="button" onClick={this.fetchReposFromUser} className={`btn btn-primary btn-lg ${cls["button-get"]}`}>Get repositories</button>
        <div className={cls["repo-grid"]}>
          { repos }
        </div>
      </div>
    );
  }
}

export default App;
