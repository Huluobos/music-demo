<template>
    <div>
        <headerDom></headerDom>
        <div class="content">
            <h1>鸣谢</h1>
            <p>
                本科四年生活已经过去了，回想夺取的每一天，都觉得充满回忆而有意义。四年里不仅让我学到了有关专业课的理论知识，更多的是学到了很多为人处世的道理和经验。当我完成本篇毕业论文时，心中思绪万千。
            </p>
            <p>
               首先，我衷心感谢韩敬峰讲师的细心指导，她的精心指导和严格的要求让我收益良多。 韩敬峰老师在学习方法和工作方法方面给了我许多很好的建议。他为我的论文提出了很多宝贵的建议和意见。 韩敬峰老师以严谨的学术态度，良好的敬业精神，和认真求实的工作作风，对我产生了很多重大的影响。他渊博的知识和耐心的教学，使我积极解决了很多问题。在此，我再次向韩敬峰老师表示最衷心的感谢。
            </p>
            <p>
              在这里也要感谢四年里所有教授过我知识的老师，是他们带领我进入计算机领域的知识海洋中遨游，是他们让我在四年大学生活的学习过程中积累了许多知识，为我撰写此次毕业论文打下了坚实的基础，。感谢各位老师四年来的辛苦栽培。
            </p>
            <p>
              最后，我想向所有的老师和朋友表达我最崇高的敬意和衷心的感谢，在四年的学习生活中，我不仅收获了丰富的知识，而且，还获得了开阔的视野。我觉得自己特别幸运，因为我已经在过去的四年里遇到了那么多优秀的老师和朋友。他们给了我无私的帮助，无论是在生活还是在学习上，让我可以在一个充满爱和温暖的环境中学习和成长。
            </p>
            <p>
                最后，我带着最崇高的敬意衷心感谢所有参与审查设计的教师和专家！感恩，感恩遇见，感恩所有。
            </p>
            <p style="text-align: right;">
                至此 , 敬上 !
            </p>
        </div>
    </div>

</template>

<script>
	import headerDom from "@/components/header";

	export default {
		name: "index",
		components: {
			headerDom,
		},
	}
</script>

<style scoped>
    .content {
        width: 1100px;
        margin: 50px auto;
        padding: 0 200px;
        box-sizing: border-box;
    }

    h1 {
        text-align: center;
        font-size: 18px;
      font-weight: 700;
    }

    p {
        font-size: 18px;
        color: #333;
        line-height: 34px;
        text-indent: 2em;
        /*padding: 20px 0;*/
    }
</style>
