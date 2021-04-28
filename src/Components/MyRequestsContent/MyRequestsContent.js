import React from 'react';
import { beautifyDate } from '../../utils';

const MyRequestsContent = ({ requests }) => {
  $(document).ready(function () {
    $('#requests').DataTable();
  });

  var count = 0;

  const handleRenew = (id) => {
    console.log('Renew Id: ', id);
  };
  const handleDelete = (id) => {
    console.log('Deletion Id : ', id);
  };

  return (
    <div className='content-page'>
      <div className='container-fluid'>
        <div className='row'>
          {/* <div className="col-lg-12"> */}
          {/* <div className="d-flex flex-wrap align-items-center justify-content-between mb-4"> */}
          {/* <div className="align-items-center mb-4">
							<div style={{ textAlign: "center" }}>
								<h4 className="mb-3">Request List</h4>
							</div>
						</div> */}
          {/* </div> */}
          <div className='col-lg-12' style={{ textAlign: 'center' }}>
            <div className='table-responsive rounded mb-3'>
              {requests.length > 0 ? (
                <table
                  id='requests'
                  className='data-table table mb-0 tbl-server-info'
                  style={{ textAlign: 'center' }}
                >
                  <thead className='bg-white text-uppercase'>
                    <tr className='ligth ligth-data'>
                      <th>
                        <div className='checkbox d-inline-block'>
                          <label htmlFor='checkbox1' className='mb-0'>
                            No.
                          </label>
                        </div>
                      </th>
                      <th>Product Name</th>
                      <th>Date of Apply</th>
                      <th>Date of Return</th>
                      <th>Product Price</th>
                      <th>Status</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody className='ligth-body'>
                    {requests.map((request) => (
                      <tr>
                        <td>
                          <div className='checkbox d-inline-block'>
                            <label htmlFor='checkbox2' className='mb-0'>
                              {++count}
                            </label>
                          </div>
                        </td>
                        <td>{request.product_name}</td>
                        <td>{beautifyDate(request.createdAt)}</td>
                        <td>
                          {request.returnDate
                            ? beautifyDate(request.returnDate)
                            : '-'}
                        </td>
                        <td>
                          &#8377;
                          {request.price}
                          /-
                        </td>
                        <td
                          style={
                            request.status === 'Accepted'
                              ? {
                                  color: 'darkgreen',
                                  fontWeight: 'bold',
                                }
                              : request.status === 'Rejected'
                              ? {
                                  color: 'red',
                                  fontWeight: 'bold',
                                }
                              : {
                                  color: 'grey',
                                }
                          }
                        >
                          {request.status}
                        </td>
                        {/* <td>
                          <div className='d-flex align-items-center list-action'>
                            <a
                              className='badge mr-2'
                              data-toggle='tooltip'
                              data-placement='top'
                              title='Renew'
                              data-original-title='Edit'
                              type='button'
                              style={{
                                backgroundColor: '#73bd7d',
                                color: 'black',
                              }}
                              onClick={handleRenew(request.id)}
                            >
                              <i
                                className='fas fa-sync-alt'
                                style={{
                                  fontSize: '0.8rem',
                                }}
                              ></i>
                            </a>
                            <a
                              className='badge mr-2'
                              data-toggle='tooltip'
                              data-placement='top'
                              title='Delete'
                              type='button'
                              data-original-title='Delete'
                              style={{
                                backgroundColor: '#db6060',
                                color: 'black',
                              }}
                              onClick={handleDelete(request.id)}
                            >
                              <i
                                className='fas fa-trash-alt'
                                style={{
                                  fontSize: '0.8rem',
                                }}
                              ></i>
                            </a>
                          </div>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h3 className='ml-3'>
                  You have not made any Request for the Inventories !
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequestsContent;
