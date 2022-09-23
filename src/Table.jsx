import React from 'react'

const Table = () => {
  return (
    <div class="tab">
      <table border={1} >
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <tr>
            <td>Akash</td>
            <td>25</td>
            <td>Male</td>
        </tr>
        <tr>
          <td>Jagdish</td>
          <td>24</td>
          <td>Male</td>
        </tr>
        <tr>
            <td>Supriya</td>
            <td>25</td>
            <td>Female</td>
        </tr>
      </table>
    </div>
  )
}

export default Table
