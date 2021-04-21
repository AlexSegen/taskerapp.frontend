import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
const Projects = () => {
    return ( 
        <Layout>

            <div className="flex justify-between p-2 border-b-2 border-gray-100">
                <div className="p-2">
                    <h1 className="m-0 text-2xl font-bold text-gray-400">Projects</h1>
                </div>
                <div className="p-2">
                </div>
            </div>

            <div className="p-4">

                <Card>
                    <Card.Header>Prueba titulo</Card.Header>
                    <Card.Body>Prueba body</Card.Body>
                    <Card.Footer>Prueba footer</Card.Footer>
                </Card>

            </div>
            
        </Layout>
     );
}
 
export default Projects;