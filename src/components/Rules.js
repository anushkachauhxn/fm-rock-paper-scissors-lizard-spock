import React, { useState } from 'react';
import { Box, Button, Modal, IconButton } from '@mui/material';
import './Rules.css';
import CloseIcon from '@mui/icons-material/Close';
import rulesImg from '../assets/image-rules.svg';

function Rules() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="rules">
            <Button 
                className="rules__btn"
                onClick={handleOpen} 
                variant="outlined"
            >
                Rules
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className="rules__modal">
                    <div className="rules__modalHeader">
                        <h1>Rules</h1>
                        <IconButton onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className="rules__modalBody">
                        <img src={rulesImg} alt="" />
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Rules;
