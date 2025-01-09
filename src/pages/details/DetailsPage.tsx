import React, { useState,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPackage } from '../../api/queries/getPackage'

const DetailsPage = () => {
  const { name } = useParams();
  const [packageDetails, setPackageDetails] = useState<PackageDetails>();
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackageDetails = async () => {
      if (!name) {
        setError('Package name is required');
        return;
      }


      try {
        const data = await getPackage(name);

        // Check if the package exists
        if (!data || !data.name) {
          setError('Invalid package details');
          navigate('/', { replace: true });
          return;
        }

        setPackageDetails(data);
      } catch (error) {
        console.error('Error fetching package details:', (error as Error).message);
        setError('Failed to fetch package details');
      }
    };

    fetchPackageDetails();  
  }, [name, navigate]); 

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (!packageDetails) {
    return <div>Loading...</div>
  }
 console.log(packageDetails)
  return (
    <div className="packege-datails">
      <h1>{packageDetails.name}</h1>
      <p>{packageDetails.description}</p>
      <p>Author: {packageDetails.author.name}</p>
    </div>
  )
}

export default DetailsPage