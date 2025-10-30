import React from 'react'
const TextBox = () => {
    return (
        <div className="bg-[#F9F9F9]">
            <div className="rounded-lg w-[37.5vw] bg-[#D9D9D9] mt-[40px] ml-[10vw]">
                <p className="w-[35vw] text-sm text-gray-700 py-[2px] ml-[1vw] pt-[20px] pb-[20px]">御社の研修を受けたIT人材についてお伺いしたいのですが、どの程度のスキルレベルまで育成されていますか？具体的には、実務でどのような開発業務を担当できるのか、また使用可能なプログラミング言語やフレームワークの範囲についても知りたいです。配属後すぐにプロジェクトへ参画できる実践的な力を持っているのか、それともOJTを通じて段階的に成長させる想定でしょうか？</p>
            </div>
            <div className="">
                <p className="text-sm py-[2px] ml-[1vw] pt-[40px] pb-[20px] w-[42vw] ml-[4vw]">当社の研修を受けたIT人材は、入社後の研修プログラムを通じて、基礎的なプログラミングスキルから実務レベルの開発能力まで段階的に習得しています。研修内容は、プログラミング言語としてはJava、Python、JavaScriptを中心に扱い、フレームワークとしてはSpring BootやReact、Vue.jsなどを実践的に学習します。また、チーム開発に必要なGitやCI/CDの運用も含まれており、コードレビューや課題解決のプロセスも経験しています。その結果、研修修了後の人材は簡単なWebアプリケーションの設計・開発・テストを自律的に進めることが可能です。配属後は、既存プロジェクトへの参画や運用保守などの業務を通じてさらに実務経験を積むことで、即戦力として活躍できる水準に達します。一方で、より高度なシステム開発や大規模プロジェクトでのリード業務については、OJTを通じて経験を積みながら段階的にスキルを向上させる想定となっています。つまり、配属直後から基礎的な業務に参加できる一方で、継続的な指導や実務経験により専門性を高め、プロジェクト全体を担える人材へと育成していくカリキュラムを設計しています。</p>
            </div>
            <div className="rounded-lg w-[37.5vw] bg-[#D9D9D9] mt-[40px] ml-[10vw]">
                <p className="w-[35vw] text-sm text-gray-700 py-[2px] ml-[1vw] pt-[20px] pb-[20px]">御社の研修を受けたIT人材についてお伺いしたいのですが、どの程度のスキルレベルまで育成されていますか？具体的には、実務でどのような開発業務を担当できるのか、また使用可能なプログラミング言語やフレームワークの範囲についても知りたいです。配属後すぐにプロジェクトへ参画できる実践的な力を持っているのか、それともOJTを通じて段階的に成長させる想定でしょうか？</p>
            </div>
            <div className="fixed left-[2.5vw] bottom-[2.5vw]">
                <div className="flex">
                    <p className="ml-[37vw] text-sm">顧客モード</p>
                    <label className="cursor-pointer relative inline-block ml-[0.5vw]">
                        <input type="checkbox" className="sr-only peer" />
                        <img src="/images/home/off.png" className="block peer-checked:hidden" />
                        <img src="/images/home/on.png" className="hidden peer-checked:block" />
                    </label>
                </div>
                <div className="w-[45vw] rounded bg-[#ffffff] border flex">
                    <textarea placeholder="ここに入力してください" className="w-[42.5vw] h-[10vh] p-2 focus:outline-none"></textarea>
                    <img src="/images/home/arrow-up.png" className="w-[30px] h-[30px] mt-[6vh] opacity-50 hover:opacity-100"/>
                </div>
                <p className="text-center mt-[0.5vh]">フィードバックを共有する</p>
            </div>
        </div>
    );
};

export default TextBox;