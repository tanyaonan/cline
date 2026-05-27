export enum NEW_USER_TYPE {
	FREE = "free",
	POWER = "power",
	BYOK = "byok",
}

type UserTypeSelection = {
	title: string
	description: string
	type: NEW_USER_TYPE
}

export const STEP_CONFIG = {
	0: {
		title: "你打算如何使用 Cline？",
		description: "选择一个选项以开始使用。",
		buttons: [
			{ text: "继续", action: "next", variant: "default" },
			{ text: "登录 Cline", action: "signin", variant: "secondary" },
		],
	},
	[NEW_USER_TYPE.FREE]: {
		title: "选择免费模型",
		buttons: [
			{ text: "创建我的账户", action: "signup", variant: "default" },
			{ text: "返回", action: "back", variant: "secondary" },
		],
	},
	[NEW_USER_TYPE.POWER]: {
		title: "选择你的模型",
		buttons: [
			{ text: "创建我的账户", action: "signup", variant: "default" },
			{ text: "返回", action: "back", variant: "secondary" },
		],
	},
	[NEW_USER_TYPE.BYOK]: {
		title: "配置你的提供商",
		buttons: [
			{ text: "继续", action: "done", variant: "default" },
			{ text: "返回", action: "back", variant: "secondary" },
		],
	},
	2: {
		title: "快完成了！",
		description: "在浏览器中完成账户创建，然后返回这里完成最后步骤。",
		buttons: [{ text: "返回", action: "back", variant: "secondary" }],
	},
} as const

export const USER_TYPE_SELECTIONS: UserTypeSelection[] = [
	{ title: "完全免费", description: "无需任何费用即可开始使用", type: NEW_USER_TYPE.FREE },
	{ title: "前沿模型", description: "Claude、GPT Codex、Gemini 等", type: NEW_USER_TYPE.POWER },
	{ title: "自带 API 密钥", description: "使用你偏好的提供商来使用 Cline", type: NEW_USER_TYPE.BYOK },
]
