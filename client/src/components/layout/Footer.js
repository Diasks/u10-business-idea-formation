import React from 'react';			
            import { Container} from 'react-bootstrap';
			
			function Footer() {
			return (
                <footer style={footerStyle}>
                <Container>
                
          
                  <div className="text-center small copyright">
                    © FORMATION 2018
                  </div>
                </Container>
              </footer>
            );
            }
            
            const  footerStyle = {
                background: '#333',
                color: '#fff',
                textAlign: 'center',
                padding: '10px'
                }
                

           
			export default Footer;