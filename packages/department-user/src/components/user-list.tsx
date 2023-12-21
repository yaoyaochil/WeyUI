import { Ref, defineComponent, inject, ref, watch } from 'vue'
import { Avatar, Button, Input, InputSearch } from '@arco-design/web-vue'
import style from '../style/custom.module.scss'
import { IconSearch } from '@arco-design/web-vue/es/icon'

interface userList {
    id: number
    avatar: string
    nickName: string
    job: string
    phone: string
}

const UserListView = defineComponent({
    setup() {
        const userList = inject('userList') as userList[]
        const emits = inject('emits') as any
        const searchLoading = inject('searchLoading') as Ref<boolean>

        const searchInput = ref('' as string)

        // 搜索
        const handleSearch = (event: KeyboardEvent | string) => {
            if (typeof event === 'string') {
                searchInput.value = event
            } else {
                searchInput.value = (event.target as HTMLInputElement).value
            }
            if (searchInput.value === '') return
            emits('onSearch',searchInput.value)
        }

        const inputChange = (value: string) => {
            searchInput.value = value
        }

        const deleteUser = (user: userList) => () => {
            emits('deleteUser',user)
        }

        return {
            handleSearch,
            userList,
            searchLoading,
            searchInput,
            inputChange,
            deleteUser
        }
    },
    render() {
        let { handleSearch,userList,searchLoading,searchInput,inputChange,deleteUser } = this


        const buttonSlots = {
            icon: ()=> <icon-user-add />
        }

        const inputSlots = {
            suffix: ()=><div class={style['search-button']}><Button onClick={()=> {handleSearch(searchInput)}} size='small' loading={searchLoading} type="text" shape={'circle'}  v-slots={{icon:()=><IconSearch />}} /></div>,
        }

        return (
            <div
                class={style['user-list']}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    height: '100%',
                }}
            >
                
                <Input placeholder='请输入成员OA' onInput={inputChange} onPressEnter={handleSearch} v-slots={inputSlots} />
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'15px'}}><Button shape={'circle'} v-slots={buttonSlots} /></div>
                <div class={style['user-list-card-box']}>
                    {userList.map(user => (
                        <div class={style['user-list-card-box-item']}>
                            <Avatar imageUrl={user.avatar}/>
                            <div class={style['user-list-card-box-item-box']}>
                                <div class={style['user-list-card-box-item-box-info']}>
                                    <span class={style['user-list-card-box-item-box-info-nickName']}>{user.nickName}</span>
                                    <span class={style['user-list-card-box-item-box-info-job']}>{user.job}</span>
                                    {/* <span class={style['user-list-card-box-item-info-phone']}>188********</span> */}
                                </div>
                                <div class={style['user-list-card-box-item-box-info']}>
                                    <span class={style['user-list-card-box-item-box-info-delete']}>
                                        <Button size='small' status='danger' shape="circle" v-slots={{icon:()=><icon-delete />}} onClick={deleteUser(user)} />
                                    </span>
                                    <span class={style['user-list-card-box-item-box-info-phone']}>
                                        <span style={{marginRight:'3px'}}><icon-phone rotate={90} strokeWidth={3} /></span>
                                        {user.phone}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
})

export default UserListView
