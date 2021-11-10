import React from "react";

class Home extends React.Component {
  state = {
    alluser: [
      {
        id: 1,
        username: "Runner",
        live: [{ country: "Myanmar", city: "Yangon" }],
      },
      {
        id: 2,
        username: "Min",
        live: [{ country: "Japn", city: null }],
      },
      {
        id: 3,
        username: "Thein",
        live: [{ country: "Korea", city: null }],
      },
      {
        id: 4,
        username: "Kyaw",
        live: [{ country: "USA", city: "NewYork" }],
      },
    ],
  };
  render() {
    const name = this.state.alluser.length;
    return (
      <div className="container-fluid">
        <h3 className="mt-2">
          Our Customers
          <span className="ms-2 badge rounded-pill bg-info">{name}</span>
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Country</th>
              <th scope="col">City</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.alluser.map((cmt) => {
              return (
                <tr key={cmt.id}>
                  <td>{cmt.id}</td>
                  <td className="text-warning">{cmt.username}</td>
                  <td>{cmt.live[0].country}</td>
                  <td>{this.citycheck(cmt.live[0].city)}</td>
                  <td>
                    <button
                      onClick={() => this.deleteUser(cmt.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  citycheck = (city) => {
    if (city !== null) {
      return <div>{city}</div>;
    } else {
      return <div className="text-secondary">Nothing</div>;
    }
  };
  deleteUser = (customer) => {
    console.log(customer);
    const counter = this.state.alluser.filter(
      (selected) => selected.id !== customer
    );
    this.setState({ alluser: counter });
  };
}

export default Home;
