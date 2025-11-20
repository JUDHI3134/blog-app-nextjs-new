import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

const SearchInput = () => {
  return (
    <div className='hidden relative sm:block'>
          <Search className='absolute top-3 left-4 w-4 h-4 text-muted-foreground'/>
          <Input className='pl-10 bg-primary/10' placeholder='Search'/>
    </div>
  )
}

export default SearchInput
