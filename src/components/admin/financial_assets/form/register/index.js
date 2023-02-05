import React, { useState } from 'react'
import { TextField, Button, Grid, LinearProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Image, Submit, SButton } from '../styled'
import {
  fieldValidate,
  isNotValid
} from '../../../../../util/validations/form-financial'
import { formatFormMoney } from '../../../../../util/validations/price-validation'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

const FormAssetRegister = ({ submit }) => {
  const classes = useStyles()
  const [form, setForm] = useState({})
  const [preview, setPreview] = useState('')
  const percent = useSelector((state) => state.financial.upload?.percent || 0)
  const loading = useSelector((state) => state.financial.loading)
  const [formValidate, setFormValidate] = useState({})

  const handleChange = (props) => {
    const { value, name } = props.target
    const message = fieldValidate(name, value)
    setFormValidate({ ...formValidate, [name]: message })
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitForm = () => {
    const newForm = {
      ...form,
      current_price: formatFormMoney(form.current_price)
    }
    submit(newForm)
  }

  const removeImage = () => {
    delete form.image
    setForm(form)
    setPreview('')
  }

  const previewImg = (props) => {
    const image = props.target.files[0]
    const url = URL.createObjectURL(image)
    setPreview(url)
    setForm({
      ...form,
      image
    })
  }

  return (
    <Box>
      <form className={classes.root} noValidate autoComplete="off">
        {preview?.length > 0 ? (
          <Grid container direction="column">
            <Grid item sm={1} md={1} xl={1}>
              <Image src={preview} />
              <Button onClick={removeImage} component="label">
                Remove
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="column">
            <Button
              variant="contained"
              color="primary"
              size="small"
              component="label"
            >
              Enviar Foto
              <input
                accept="image/*"
                type="file"
                name="image"
                hidden
                onChange={previewImg}
                disabled={loading}
              />
            </Button>
          </Grid>
        )}

        <TextField
          size="small"
          error={!!formValidate.name}
          margin="normal"
          id="standard-error-helper-text"
          label="Nome"
          name="name"
          autoFocus
          value={form.name || ''}
          onChange={handleChange}
          helperText={formValidate.name || ''}
          disabled={loading}
        />

        <TextField
          size="small"
          error={!!formValidate.description}
          margin="normal"
          name="description"
          label="Descrição"
          type="text"
          id="standard-error-helper-text"
          value={form.description || ''}
          onChange={handleChange}
          helperText={formValidate.description || ''}
          disabled={loading}
        />

        <TextField
          size="small"
          error={!!formValidate.bvmf}
          margin="normal"
          name="bvmf"
          label="Bvmf"
          type="text"
          id="standard-error-helper-text"
          value={form.bvmf || ''}
          onChange={handleChange}
          helperText={formValidate.bvmf || ''}
          disabled={loading}
        />

        <TextField
          size="small"
          error={!!formValidate.current_price}
          margin="normal"
          name="current_price"
          label="Preço"
          type="text"
          id="standard-error-helper-text"
          value={form.current_price || ''}
          inputProps={{ maxLength: 8 }}
          onChange={handleChange}
          helperText={formValidate.current_price || ''}
          disabled={loading}
        />

        <TextField
          size="small"
          error={!!formValidate.quantity}
          margin="normal"
          name="quantity"
          label="Quantidade"
          type="text"
          id="standard-error-helper-text"
          value={form.quantity || ''}
          onChange={handleChange}
          helperText={formValidate.quantity || ''}
          disabled={loading}
        />

        <Submit>
          {loading ? (
            <Grid container direction="column">
              <LinearProgress variant="determinate" value={percent} />
            </Grid>
          ) : (
            <SButton
              type="button"
              onClick={submitForm}
              disabled={isNotValid(form, formValidate)}
            >
              Cadastrar
            </SButton>
          )}
        </Submit>
      </form>
    </Box>
  )
}

export default FormAssetRegister
