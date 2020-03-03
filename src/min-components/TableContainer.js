import React from 'react'
import '../style/style.scss'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteItem } from '../redux/action/ItemAction'


const TableContainer = (props) => {
    const { store, removeFromStore } = props;
    return (

        <div>
            <table id="teble" border="5">
                <tbody>
                    <tr className="tr">
                        <th className="th"> Id </th>
                        <th className="th"> Name </th>
                        <th className="th"> Price </th>
                        <th className="th"> Action </th>
                    </tr>
                    {
                        store.length > 0 ? (
                            store.map(data => {
                                return (
                                    <tr className="Ninjas" key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.price}</td>
                                        <td><button onClick={() => { removeFromStore(data.id) }} ><NavLink className="link" to="/products" >Delete</NavLink></button></td>
                                    </tr>

                                )
                            })
                        ) :
                            (
                                <h5>No Item Left In Store</h5>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

const getProps = (state) => {
    return {
        store: state.items
    }
}

const mapDispatch = (dispatch) => {
    return {
        removeFromStore: (id) => { dispatch(deleteItem(id)) }                         // Hiden Way
        // removeFromStore: (id) => { dispatch({ type: 'DELETE_ITEM', itemId: id}) } // Clear Way
    }
}
export default connect(getProps, mapDispatch)(TableContainer);
