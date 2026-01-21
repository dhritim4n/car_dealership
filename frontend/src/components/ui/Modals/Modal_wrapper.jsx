import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import { useState } from 'react';

export default function Modal_wrapper({children, name}) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Button className="bg-(--color-accent)" variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        {name}
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
          

          {children}

      </Modal>
    </React.Fragment>
  );
}



