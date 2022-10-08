import React from 'react'

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({departments, handleSetSlug}: Props) =>{
  console.log("Mi grupo de departamentos es:", departments)
 
  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}`)
  }

  const departmentOptions: any = departments.map((department: Category) => {
    return (
      <option
      value={department.slug}
      key={department.id}
     >
      {department.name}
     </option>
    )
  })
     
  return (
    <select 
    onChange={onHandleSetSlug}
    defaultValue="value0"
    >
      <option disabled value="value0">Selecione una opción</option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup