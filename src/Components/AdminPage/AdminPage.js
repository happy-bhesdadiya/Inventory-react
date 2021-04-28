import React, { useState } from 'react'
import Spinner from '../../spinner';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import AddAdmin from './../addAdmin/AddAdmin'
function AdminPage() {
    const [loading, setLoading] = useState(false);
    return (
        
            <div>
			{loading ? (
				<Spinner size={100} loading={loading} />
			) : (
				<div>
					<Sidebar active="home" />
					<AddAdmin/>
					<Footer />
				</div>
			)}
		</div>
        
    )
}

export default AdminPage
