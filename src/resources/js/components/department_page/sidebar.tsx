import Member from './member';
import Knowledge from './knowledge';

const Sidebar = ({department_id}) => {

    return (
        <div className="w-80 h-[105vh] bg-[#D9D9D9]">
            <div>
                <a href="/">
                    <img src="/images/logo_icon/estra_logo.png" alt="estraのロゴ" className="w-60 h-25 mx-auto" />
                </a>
            </div>
            <div>
                <div className="h-150 overflow-y-scroll">
                    <Member />
                </div>
                <Knowledge department_id={department_id}/>
            </div>
        </div>
    );
};

export default Sidebar;
