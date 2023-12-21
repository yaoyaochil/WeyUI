import { Component, provide, ref, watch } from "vue";
import UserListView from "./components/user-list";
import { UserInfoView } from "./components/user-info";
import { Empty } from "@arco-design/web-vue";

interface userList {
    id: number
    avatar: string
    nickName: string
    job: string
    phone: string
}

const WDepartmentUser:Component = {
    name: 'WDepartmentUser',
    props: {
        userList: {
            type: Array,
            default: () => ([] as userList[])
        },
        searchLoading: {
            type: Boolean,
            default: false
        }
    },
    emits: ['onSearch','deleteUser'],
    setup(props,{emit}) {
        const selectUserInfo = ref({})
        const searchLoading = ref(props.searchLoading)
        provide('userList', props.userList)
        provide('searchLoading', searchLoading)
        provide('emits',emit)

        watch(()=>props.searchLoading, (newVal) => {
            searchLoading.value = newVal
        })

        return {
            selectUserInfo
        }
    },
    render() {
        let { selectUserInfo } = this

        const emptySlots = {
            image: ()=><icon-user />
        }

        return (
        <div style={{margin:'auto',display:'flex',flex:1,padding:'10px',height:'100%',gap:'10px'}}>
            <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 3,
                    height: '100%',
                    background: '#fff',
                    borderRadius: '10px',
                    padding: '20px',
                }}>
                <UserListView />
            </div>
            <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 6,
                    height: '100%',
                    background: '#fff',
                    borderRadius: '10px',
                    padding: '20px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {selectUserInfo.value ? <UserInfoView /> : <Empty v-slots={emptySlots} />}
            </div>
        </div>
        )
    }
}

export default WDepartmentUser;