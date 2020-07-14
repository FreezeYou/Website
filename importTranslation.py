#!/usr/bin/python3
import os
import re
import time
import json

translations = {}
cwd = os.getcwd()
regex = re.compile(r'{{@.+?}}')


def print_log(log):
    print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) + " " + log + " ")


def load_translation_file():
    path = cwd + "/translations"
    file_list = os.listdir(path)
    for tmp in file_list:
        tmp_path = os.path.join(path, tmp)
        if os.path.isfile(tmp_path) and tmp_path[tmp_path.rfind('.') + 1:].lower() == 'json':
            with open(tmp_path, 'r') as f:
                translations[tmp_path[tmp_path.rfind('/') + 1:tmp_path.rfind('.')]] = json.load(f)


def pre_generate_documents_for_vuepress(path):
    file_list = os.listdir(path)
    for tmp in file_list:
        tmp_path = os.path.join(path, tmp)
        if os.path.isdir(tmp_path):
            pre_generate_documents_for_vuepress(tmp_path)
        elif tmp_path[tmp_path.rfind('.') + 1:].lower() == 'md':
            with open(tmp_path, 'r') as f:
                lines = f.readlines()
                for translation_country_key in translations.keys():
                    if translation_country_key == 'default':
                        continue
                    output_file_path = \
                        cwd + "/docs/" + translation_country_key + tmp_path[len(cwd) + 9:]
                    os.makedirs(output_file_path[:output_file_path.rfind("/")], 0o777, True)
                    with open(
                            output_file_path,
                            "w+"
                    ) as output:
                        for line in lines:
                            generated_line = line
                            placeholders = regex.findall(generated_line)
                            for placeholder in placeholders:
                                key = placeholder[3:-2]
                                generated_line = generated_line.replace(
                                    placeholder,
                                    translations[translation_country_key].get(
                                        key, translations['default'][key]
                                    )
                                )
                            output.write(generated_line)


print_log("[INFO] Current working directory: " + cwd)
print_log("[INFO] Loading translation files...")
load_translation_file()
pre_generate_documents_for_vuepress(cwd + "/template")
print_log("[INFO] Done.")
print_log("[INFO] It's the time for using vuepress to generate the final documents!")
